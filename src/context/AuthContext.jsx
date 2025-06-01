import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);  useEffect(() => {
    // Log environment status for debugging
    console.log('🔧 Supabase Configuration:');
    console.log('URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('Key configured:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('Auth state change:', event, session?.user?.email);
      
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      // Handle new user signin - ensure profile exists
      if (event === 'SIGNED_IN' && session?.user) {
        const provider = session.user.app_metadata?.provider || 'email';
        
        // Ensure profile exists (with retry logic)
        setTimeout(async () => {
          try {
            await ensureProfile(session.user.id, session.user.email, provider);
            console.log(`Profile ensured for ${provider} user:`, session.user.email);
          } catch (error) {
            console.error('Error ensuring profile:', error);
          }
        }, 500); // Small delay to allow database trigger to complete
      }
    });

    return () => subscription.unsubscribe();
  }, []);
  // Sign up with email and password
  const signUp = async (email, password, userData = {}) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      });

      if (error) throw error;

      // Profile will be automatically created by database trigger
      // If we need to update additional profile data, we can do it here
      if (data.user && Object.keys(userData).length > 0) {
        // Wait a moment for the trigger to create the profile
        setTimeout(async () => {
          try {
            const { error: updateError } = await supabase
              .from('profiles')
              .update(userData)
              .eq('id', data.user.id);
            
            if (updateError) {
              console.warn('Profile update error:', updateError);
            }
          } catch (updateError) {
            console.warn('Profile update error:', updateError);
          }
        }, 1000);
      }

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  // Sign in with email and password
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      
      // Get the current origin
      const origin = window.location.origin;
      const redirectTo = `${origin}/auth/callback`;
      
      console.log('Starting Google OAuth with redirect to:', redirectTo);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectTo,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });

      if (error) {
        console.error('Google OAuth error:', error);
        throw error;
      }
      
      console.log('Google OAuth initiated successfully');
      return { data, error: null };
    } catch (error) {
      console.error('Google OAuth error:', error);
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error signing out:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update user profile
  const updateProfile = async (updates) => {
    try {
      setLoading(true);
      if (!user) throw new Error('No user');

      const { error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);

      if (error) throw error;

      return { error: null };
    } catch (error) {
      return { error };
    } finally {
      setLoading(false);
    }
  };

  // Get user profile
  const getProfile = async (userId = user?.id) => {
    try {
      if (!userId) throw new Error('No user ID');

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Update password
  const updatePassword = async (password) => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) throw error;
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Ensure user profile exists (fallback for cases where trigger might not work)
  const ensureProfile = async (userId, userEmail, provider = 'email') => {
    try {
      // First check if profile exists
      const { data: existingProfile, error: fetchError } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .single();

      if (existingProfile) {
        return { data: existingProfile, error: null };
      }

      // If no profile exists, create one
      if (fetchError && fetchError.code === 'PGRST116') { // No rows returned
        const { data, error } = await supabase
          .from('profiles')
          .insert([
            {
              id: userId,
              email: userEmail,
              auth_provider: provider,
              created_at: new Date().toISOString()
            }
          ])
          .select()
          .single();

        if (error) {
          console.error('Error creating profile:', error);
          return { data: null, error };
        }

        return { data, error: null };
      }

      return { data: null, error: fetchError };
    } catch (error) {
      console.error('Error ensuring profile:', error);
      return { data: null, error };
    }
  };
  const value = {
    user,
    session,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    updateProfile,
    getProfile,
    resetPassword,
    updatePassword,
    ensureProfile,
    // Legacy support
    login: signIn,
    logout: signOut,
    updateUser: updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
