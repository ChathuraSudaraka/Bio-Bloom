import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Layout from '../../layout/Layout';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [status, setStatus] = useState('processing');

  useEffect(() => {
    // Handle OAuth callback
    const handleCallback = async () => {
      try {
        // Wait for auth state to settle
        if (!loading) {
          if (user) {
            console.log('OAuth successful, user:', user.email);
            setStatus('success');
            
            // Redirect to profile after a short delay
            setTimeout(() => {
              navigate('/profile', { replace: true });
            }, 2000);
          } else {
            console.log('OAuth failed - no user found');
            setStatus('error');
            
            // Redirect to login after a short delay
            setTimeout(() => {
              navigate('/login', { replace: true });
            }, 3000);
          }
        }
      } catch (error) {
        console.error('OAuth callback error:', error);
        setStatus('error');
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 3000);
      }
    };

    handleCallback();
  }, [user, loading, navigate]);

  if (loading || status === 'processing') {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Completing sign in...
            </h2>
            <p className="text-gray-600">
              Please wait while we complete your Google sign in.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  if (status === 'success') {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Sign in successful!
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome to Recycle Hub. Redirecting to your profile...
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Sign in failed
          </h2>
          <p className="text-gray-600 mb-4">
            There was a problem signing you in. Redirecting to login page...
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default OAuthCallback;
