// Google OAuth Test Component
// This can be used to test Google OAuth functionality

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const GoogleOAuthTest = () => {
  const { signInWithGoogle, user, loading } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleTest = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      console.log('Testing Google OAuth...');
      const { data, error } = await signInWithGoogle();
      
      if (error) {
        setError(error.message);
        console.error('Google OAuth test failed:', error);
      } else {
        console.log('Google OAuth test successful:', data);
      }
    } catch (err) {
      setError('OAuth test failed: ' + err.message);
      console.error('OAuth test error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (user) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          ✅ Google OAuth Working!
        </h3>
        <p className="text-green-700">
          User: {user.email} ({user.app_metadata?.provider || 'email'})
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
      <h3 className="text-lg font-semibold text-blue-800 mb-4">
        🧪 Google OAuth Test
      </h3>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700">
          {error}
        </div>
      )}
      
      <button
        onClick={handleGoogleTest}
        disabled={isLoading || loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Testing...' : 'Test Google OAuth'}
      </button>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>This will test the Google OAuth flow. Check browser console for detailed logs.</p>
      </div>
    </div>
  );
};

export default GoogleOAuthTest;
