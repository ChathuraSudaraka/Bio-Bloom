import React, { useState } from 'react';
import Layout from '../../layout/Layout';

const shopCategories = [
  {
    id: 1,
    title: "Electronics",
    icon: "🔌",
    items: ["Phones", "Laptops", "Computers", "Audio", "TV", "Home Appliances"],
    color: "blue"
  },
  {
    id: 2,
    title: "Furniture",
    icon: "🪑",
    items: ["Sofas", "Desks", "Mattresses", "Cupboards", "Beds"],
    color: "green"
  },
  {
    id: 3,
    title: "Clothing",
    icon: "👕",
    items: ["Men's Wear", "Women's Wear", "Kids' Wear", "Shoes", "Bags"],
    color: "purple"
  },
  {
    id: 4,
    title: "Sports & Recreation",
    icon: "⚽",
    items: ["Exercise Equipment", "Bicycles", "Sports Items"],
    color: "orange"
  },
  {
    id: 5,
    title: "Vehicles",
    icon: "🚗",
    items: ["Bikes", "Cars", "Auto Parts"],
    color: "red"
  }
];

const Shop = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'from-blue-400 to-cyan-600',
        border: 'border-blue-200',
        text: 'text-blue-600'
      },
      green: {
        bg: 'from-green-400 to-emerald-600',
        border: 'border-green-200',
        text: 'text-green-600'
      },
      purple: {
        bg: 'from-purple-400 to-violet-600',
        border: 'border-purple-200',
        text: 'text-purple-600'
      },
      orange: {
        bg: 'from-orange-400 to-amber-600',
        border: 'border-orange-200',
        text: 'text-orange-600'
      },
      red: {
        bg: 'from-red-400 to-rose-600',
        border: 'border-red-200',
        text: 'text-red-600'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <Layout>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-green-50 to-emerald-50'
      }`}>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={require("./image/15.png")} 
              alt="Shopping"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-white mr-4">
                  Recycle Hub Shop
                </h1>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    isDarkMode
                      ? 'bg-yellow-400 text-slate-900 hover:bg-yellow-300'
                      : 'bg-white/20 text-white hover:bg-white/30'
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
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Discover sustainable products and give pre-loved items a new home. Shop eco-consciously with our curated marketplace.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`p-6 rounded-2xl shadow-xl ${
              isDarkMode ? 'bg-slate-800' : 'bg-white'
            }`}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      isDarkMode 
                        ? 'bg-slate-700 border-slate-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    } focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none`}
                  />
                </div>
                <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200">
                  <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-center mb-12 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Shop by Category
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shopCategories.map((category) => (
                <div
                  key={category.id}
                  className={`group cursor-pointer transition-all duration-300 hover:scale-105 ${
                    isDarkMode ? 'bg-slate-800' : 'bg-white'
                  } rounded-2xl shadow-xl overflow-hidden`}
                  onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                >
                  <div className={`p-6 border-l-4 ${getColorClasses(category.color).border}`}>
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{category.icon}</span>
                      <h3 className={`text-xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {category.title}
                      </h3>
                    </div>
                    
                    {selectedCategory === category.id && (
                      <div className="mt-4 space-y-2 animate-fadeIn">
                        {category.items.map((item, index) => (
                          <a
                            key={index}
                            href={`/${item.replace(/[^a-zA-Z0-9]/g, '_')}`}
                            className={`block p-2 rounded-lg transition-colors duration-200 hover:bg-gradient-to-r hover:${getColorClasses(category.color).bg} hover:text-white ${
                              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-white'
                            }`}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-4 flex justify-between items-center">
                      <span className={`text-sm ${getColorClasses(category.color).text}`}>
                        {category.items.length} subcategories
                      </span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-200 ${
                          selectedCategory === category.id ? 'rotate-180' : ''
                        } ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`p-8 rounded-2xl shadow-xl ${
                isDarkMode ? 'bg-slate-800' : 'bg-white'
              }`}>
                <h2 className={`text-3xl font-bold mb-6 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Why Shop with Us?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Quality Assured
                      </h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        All items are carefully inspected and verified before listing
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Best Prices
                      </h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Competitive pricing on sustainable, pre-loved items
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Eco-Friendly
                      </h3>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                        Supporting sustainability by giving items a second life
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Ready to Start Shopping?
                  </h3>
                  <p className={`text-lg mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Join our community of eco-conscious shoppers today!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/register"
                    className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105"
                  >
                    Create Account
                  </a>
                  <a
                    href="/buy&sale"
                    className={`px-6 py-3 border-2 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 ${
                      isDarkMode
                        ? 'border-white text-white hover:bg-white hover:text-slate-900'
                        : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                    }`}
                  >
                    Browse Items
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Shop;
