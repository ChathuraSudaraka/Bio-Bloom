import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';

const Profile = () => {
  const navigate = useNavigate();
  const { user, session, signOut, updateProfile, getProfile, loading: authLoading } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const [profileData, setProfileData] = useState({
    full_name: '',
    phone_number: '',
    address: '',
    city: '',
    nic_number: ''
  });

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [showAddPayment, setShowAddPayment] = useState(false);
  const [paymentData, setPaymentData] = useState({
    type: 'credit_card',
    provider: '',
    last_four: '',
    expiry_month: '',
    expiry_year: '',
    cardholder_name: ''
  });  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/register');
      return;
    }

    if (user) {
      loadProfile();
      loadPaymentMethods();
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showAddPayment) {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showAddPayment]);

  const loadProfile = async () => {
    try {
      setLoading(true);
      const { data, error } = await getProfile();
      
      if (error) {
        setError('Failed to load profile');
        return;
      }

      if (data) {
        setProfile(data);
        setProfileData({
          full_name: data.full_name || '',
          phone_number: data.phone_number || '',
          address: data.address || '',
          city: data.city || '',
          nic_number: data.nic_number || ''
        });
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const loadPaymentMethods = async () => {
    try {
      if (!user) return;

      const { data, error } = await supabase
        .from('payment_methods')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading payment methods:', error);
        return;
      }

      setPaymentMethods(data || []);
    } catch (err) {
      console.error('Error loading payment methods:', err);
    }
  };

  const addPaymentMethod = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      if (!user) throw new Error('No user');

      // Validate required fields
      if (!paymentData.provider || !paymentData.last_four || !paymentData.expiry_month || !paymentData.expiry_year || !paymentData.cardholder_name) {
        setError('Please fill in all required fields');
        return;
      }

      // Check if this is the first payment method (make it default)
      const isFirstMethod = paymentMethods.length === 0;

      const { error } = await supabase
        .from('payment_methods')
        .insert([
          {
            user_id: user.id,
            type: paymentData.type,
            provider: paymentData.provider,
            last_four: paymentData.last_four,
            expiry_month: parseInt(paymentData.expiry_month),
            expiry_year: parseInt(paymentData.expiry_year),
            cardholder_name: paymentData.cardholder_name,
            is_default: isFirstMethod,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // If this is the first payment method, update profile to mark payment setup as complete
      if (isFirstMethod) {
        await updateProfile({ payment_method_setup: true });
      }

      setSuccess('Payment method added successfully!');
      setShowAddPayment(false);
      setPaymentData({
        type: 'credit_card',
        provider: '',
        last_four: '',
        expiry_month: '',
        expiry_year: '',
        cardholder_name: ''
      });
      
      await loadPaymentMethods();
      await loadProfile(); // Refresh profile to update payment setup status
    } catch (err) {
      setError('Failed to add payment method');
      console.error('Error adding payment method:', err);
    } finally {
      setSaving(false);
    }
  };
  const removePaymentMethod = async (methodId) => {
    const confirmed = window.confirm('Are you sure you want to remove this payment method?');
    if (!confirmed) return;

    try {
      setSaving(true);
      setError('');
      setSuccess('');

      const { error } = await supabase
        .from('payment_methods')
        .delete()
        .eq('id', methodId)
        .eq('user_id', user.id);

      if (error) throw error;

      setSuccess('Payment method removed successfully!');
      await loadPaymentMethods();
      
      // If no payment methods left, update profile
      const remainingMethods = paymentMethods.filter(method => method.id !== methodId);
      if (remainingMethods.length === 0) {
        await updateProfile({ payment_method_setup: false });
        await loadProfile();
      }
    } catch (err) {
      setError('Failed to remove payment method');
      console.error('Error removing payment method:', err);
    } finally {
      setSaving(false);
    }
  };
  const setDefaultPaymentMethod = async (methodId) => {
    try {
      setSaving(true);
      setError('');

      // First, remove default from all methods
      await supabase
        .from('payment_methods')
        .update({ is_default: false })
        .eq('user_id', user.id);

      // Then set the selected method as default
      const { error } = await supabase
        .from('payment_methods')
        .update({ is_default: true })
        .eq('id', methodId)
        .eq('user_id', user.id);

      if (error) throw error;

      setSuccess('Default payment method updated!');
      await loadPaymentMethods();
    } catch (err) {
      setError('Failed to update default payment method');
      console.error('Error updating default payment method:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleCloseModal = () => {
    setShowAddPayment(false);
    setPaymentData({
      type: 'credit_card',
      provider: '',
      last_four: '',
      expiry_month: '',
      expiry_year: '',
      cardholder_name: ''
    });
    setError('');
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      const updates = {
        ...profileData,
        profile_completed: true,
        updated_at: new Date().toISOString()
      };

      const { error } = await updateProfile(updates);

      if (error) {
        setError('Failed to update profile');
        return;
      }

      setSuccess('Profile updated successfully!');
      await loadProfile();
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setSaving(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for last_four to only allow numbers
    if (name === 'last_four') {
      const numericValue = value.replace(/\D/g, '').slice(0, 4);
      setPaymentData(prev => ({
        ...prev,
        [name]: numericValue
      }));
      return;
    }
    
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const isGoogleUser = profile?.auth_provider === 'google';
  const needsProfileSetup = isGoogleUser && !profile?.profile_completed;
  const needsPaymentSetup = !profile?.payment_method_setup;

  if (authLoading || loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading profile...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profile?.full_name || user?.email || 'Welcome'}
                  </h1>
                  <p className="text-gray-600">{user?.email}</p>
                  {needsProfileSetup && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-2">
                      Profile setup required
                    </span>
                  )}
                  {needsPaymentSetup && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mt-2 ml-2">
                      Payment method needed
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Setup Alert */}
          {(needsProfileSetup || needsPaymentSetup) && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex">
                <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">Complete your account setup</h3>
                  <p className="mt-1 text-sm text-blue-700">
                    {needsProfileSetup && needsPaymentSetup 
                      ? 'Please complete your profile information and add a payment method to start using all features.'
                      : needsProfileSetup 
                      ? 'Please complete your profile information to continue.'
                      : 'Please add a payment method to start making purchases.'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error/Success Messages */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-green-600">{success}</p>
            </div>
          )}

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === 'profile'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Profile Information
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`py-4 px-6 border-b-2 font-medium text-sm ${
                    activeTab === 'payment'
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Payment Methods
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-6">Profile Information</h2>
                  
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={profileData.full_name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone_number"
                          value={profileData.phone_number}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={profileData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter your address"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={profileData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter your city"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          NIC Number *
                        </label>
                        <input
                          type="text"
                          name="nic_number"
                          value={profileData.nic_number}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          placeholder="Enter your NIC number"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={saving}
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {saving ? 'Saving...' : 'Save Profile'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'payment' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-medium text-gray-900">Payment Methods</h2>
                    <button
                      onClick={() => setShowAddPayment(true)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Add Payment Method
                    </button>
                  </div>

                  {paymentMethods.length === 0 ? (
                    <div className="text-center py-12">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No payment methods</h3>
                      <p className="text-gray-600 mb-4">Add a payment method to start making purchases.</p>
                      <button
                        onClick={() => setShowAddPayment(true)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Add Your First Payment Method
                      </button>
                    </div>                  ) : (
                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z" />
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">
                                  {method.provider} •••• {method.last_four}
                                </p>
                                <p className="text-sm text-gray-600">
                                  Expires {method.expiry_month.toString().padStart(2, '0')}/{method.expiry_year}
                                </p>
                                <p className="text-sm text-gray-600">
                                  {method.cardholder_name}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {method.is_default && (
                                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                  Default
                                </span>
                              )}
                              {!method.is_default && (
                                <button
                                  onClick={() => setDefaultPaymentMethod(method.id)}
                                  disabled={saving}
                                  className="text-sm text-green-600 hover:text-green-700 disabled:opacity-50"
                                >
                                  Set as Default
                                </button>
                              )}
                              <button
                                onClick={() => removePaymentMethod(method.id)}
                                disabled={saving}
                                className="text-sm text-red-600 hover:text-red-700 disabled:opacity-50"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}                  {/* Add Payment Method Modal */}
                  {showAddPayment && (
                    <div 
                      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                      onClick={(e) => {
                        if (e.target === e.currentTarget) {
                          handleCloseModal();
                        }
                      }}
                    >
                      <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-medium text-gray-900">Add Payment Method</h3>
                          <button
                            onClick={handleCloseModal}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        
                        <form onSubmit={addPaymentMethod} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Payment Type
                            </label>
                            <select
                              name="type"
                              value={paymentData.type}
                              onChange={handlePaymentInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            >
                              <option value="credit_card">Credit Card</option>
                              <option value="debit_card">Debit Card</option>
                              <option value="bank_transfer">Bank Transfer</option>
                              <option value="digital_wallet">Digital Wallet</option>
                            </select>
                          </div>                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Card Provider *
                            </label>
                            <input
                              type="text"
                              name="provider"
                              value={paymentData.provider}
                              onChange={handlePaymentInputChange}
                              placeholder="e.g., Visa, Mastercard"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Four Digits *
                            </label>
                            <input
                              type="text"
                              name="last_four"
                              value={paymentData.last_four}
                              onChange={handlePaymentInputChange}
                              placeholder="1234"
                              maxLength={4}
                              pattern="[0-9]{4}"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expiry Month *
                              </label>
                              <input
                                type="number"
                                name="expiry_month"
                                value={paymentData.expiry_month}
                                onChange={handlePaymentInputChange}
                                placeholder="MM"
                                min="1"
                                max="12"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expiry Year *
                              </label>
                              <input
                                type="number"
                                name="expiry_year"
                                value={paymentData.expiry_year}
                                onChange={handlePaymentInputChange}
                                placeholder="YYYY"
                                min={new Date().getFullYear()}
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Cardholder Name *
                            </label>
                            <input
                              type="text"
                              name="cardholder_name"
                              value={paymentData.cardholder_name}
                              onChange={handlePaymentInputChange}
                              placeholder="Name as it appears on card"
                              required
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                            />
                          </div>                          <div className="flex justify-end space-x-3 pt-4">
                            <button
                              type="button"
                              onClick={handleCloseModal}
                              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                            >
                              Cancel
                            </button><button
                              type="submit"
                              disabled={saving}
                              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {saving ? 'Adding...' : 'Add Payment Method'}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
