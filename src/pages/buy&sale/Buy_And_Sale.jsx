import React, { useState } from 'react';
import Layout from '../../layout/Layout';

function Buy_And_Sale() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSaleClick = () => {
    setShowRegistrationModal(true);
  };

  const closeModal = () => {
    setShowRegistrationModal(false);
  };

  return (
    <Layout>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-green-50 to-emerald-50'
      }`}>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center mb-6">
                <h1 className={`text-4xl md:text-5xl font-bold mr-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Buy & Sale Second-Hand Items
                </h1>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isDarkMode
                      ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
                      : 'bg-green-100 text-green-600 hover:bg-green-200'
                  }`}
                >
                  {isDarkMode ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className={`text-xl max-w-3xl mx-auto ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Join our sustainable marketplace! Find great deals on pre-loved items or sell your unused belongings to give them a new life.
              </p>
            </div>

            {/* Action Cards */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Buy Card */}
              <div className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-slate-800' : 'bg-white'
              } rounded-2xl shadow-xl overflow-hidden border-4 ${
                isDarkMode ? 'border-slate-600 hover:border-blue-400' : 'border-gray-200 hover:border-blue-400'
              }`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={require('./image/10.gif')} 
                    alt="Buy Items"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Find Amazing Deals</h3>
                    <p className="text-blue-100">Browse through thousands of quality pre-owned items</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Shop Now
                      </h4>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Discover sustainable shopping
                      </p>
                    </div>
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v5a2 2 0 002 2h7.5M21 16v2a2 2 0 01-2 2M17 16h2a2 2 0 012 2v0" />
                    </svg>
                  </div>
                  <a
                    href="/shop"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    BUY NOW
                  </a>
                </div>
              </div>

              {/* Sell Card */}
              <div className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                isDarkMode ? 'bg-slate-800' : 'bg-white'
              } rounded-2xl shadow-xl overflow-hidden border-4 ${
                isDarkMode ? 'border-slate-600 hover:border-green-400' : 'border-gray-200 hover:border-green-400'
              }`}>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={require('./image/12.gif')} 
                    alt="Sell Items"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">Turn Clutter into Cash</h3>
                    <p className="text-green-100">Sell your unused items and help the environment</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-semibold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Start Selling
                      </h4>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        List your items today
                      </p>
                    </div>
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <button
                    onClick={handleSaleClick}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    SELL NOW
                  </button>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-20">
              <h2 className={`text-3xl font-bold text-center mb-12 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Why Choose Our Platform?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className={`text-center p-6 rounded-2xl ${
                  isDarkMode ? 'bg-slate-800' : 'bg-white'
                } shadow-lg`}>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Secure Transactions
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Safe and secure payment processing with buyer and seller protection
                  </p>
                </div>

                <div className={`text-center p-6 rounded-2xl ${
                  isDarkMode ? 'bg-slate-800' : 'bg-white'
                } shadow-lg`}>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Eco-Friendly
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Reduce waste and promote sustainability by giving items a second life
                  </p>
                </div>

                <div className={`text-center p-6 rounded-2xl ${
                  isDarkMode ? 'bg-slate-800' : 'bg-white'
                } shadow-lg`}>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Community Driven
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Join a community of conscious consumers and sellers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`relative max-w-md w-full p-8 rounded-2xl shadow-2xl ${
            isDarkMode ? 'bg-slate-800' : 'bg-white'
          }`}>
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 p-1 rounded-full transition-colors ${
                isDarkMode ? 'hover:bg-slate-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Are you registered before?
              </h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                To sell items, you need to have an account with us.
              </p>
            </div>
            
            <div className="space-y-3">
              <a
                href="/addItem"
                onClick={closeModal}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Yes, I have an account
              </a>
              <a
                href="/register"
                onClick={closeModal}
                className={`w-full inline-flex items-center justify-center px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? 'border-slate-600 text-white hover:bg-slate-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                No, create new account
              </a>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Buy_And_Sale;



