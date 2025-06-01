import React from 'react';

const categories = [
  "All Categories",
  "Electronics",
  "Furniture", 
  "Clothing",
  "Sports & Recreation",
  "Books",
  "Vehicles"
];

const subcategories = {
  "Electronics": ["Phones", "Laptops", "Computers", "Audio", "TV", "Home Appliances"],
  "Furniture": ["Sofas", "Desks", "Mattresses", "Cupboards", "Beds"],
  "Clothing": ["Men's Wear", "Women's Wear", "Kids' Wear", "Shoes", "Bags"],
  "Sports & Recreation": ["Exercise Equipment", "Bicycles", "Sports Items"],
  "Books": ["Literature", "Educational", "Comics", "Reference"],
  "Vehicles": ["Bikes", "Cars", "Auto Parts"]
};

const conditions = ["All Conditions", "Like New", "Excellent", "Very Good", "Good"];
const brands = ["All Brands", "Apple", "Samsung", "Sony", "Nike", "IKEA", "Generic"];
const priceRanges = [
  { label: "All Prices", min: 0, max: 10000 },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $300", min: 100, max: 300 },
  { label: "$300 - $500", min: 300, max: 500 },
  { label: "$500+", min: 500, max: 10000 }
];

const ShopFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedSubcategory,
  setSelectedSubcategory,
  selectedCondition,
  setSelectedCondition,
  selectedBrand,
  setSelectedBrand,
  selectedPriceRange,
  setSelectedPriceRange,
  customPriceMin,
  setCustomPriceMin,
  customPriceMax,
  setCustomPriceMax,
  setCurrentPage,  clearFilters,  isOpen,
  setIsOpen
}) => {
  return (
    <div className="relative">
      {/* Mobile Overlay - Only show on mobile when filter is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Filters Sidebar */}      
      <div className={`
        lg:w-64 lg:flex-shrink-0 lg:static lg:transform-none lg:bg-transparent lg:z-auto
        fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="bg-white rounded-xl border-2 border-green-200 p-5 sm:p-6 lg:sticky lg:top-8 h-full lg:h-auto lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-transparent">{/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between mb-6 pb-4 border-b border-green-200">            <h2 className="text-xl font-bold text-green-800">Filters</h2>            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-green-100 rounded-full transition-all transform hover:scale-110 active:scale-95 bg-white"
            >
              <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>          {/* Desktop header */}
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-green-800 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
              </svg>
              Filters
            </h2>            <button
              onClick={clearFilters}
              className="text-sm text-green-600 hover:text-green-800 font-medium transition-colors bg-white px-3 py-1 rounded-full hover:bg-green-50"
            >
              Clear All
            </button>
          </div>          {/* Mobile Clear All Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => {
                clearFilters();
                setIsOpen(false);
              }}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Clear All Filters</span>
            </button>
          </div>          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-green-700 mb-2 flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Products
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-3 py-2.5 border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white transition-all"
              />
              <svg className="w-5 h-5 text-green-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">            <label className="block text-sm font-bold text-green-700 mb-3 flex items-center">
              <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Category
            </label>
            <div className="space-y-2 bg-white/70 p-4 rounded-lg border-2 border-green-200">
              {categories.map((category) => (
                <label key={category} className="flex items-center hover:bg-green-50 p-1 rounded transition-colors">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => {
                      setSelectedCategory(category);
                      setSelectedSubcategory("");
                      setCurrentPage(1);
                    }}
                    className="h-4 w-4 text-green-600 border-green-300 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 font-medium">
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>          {/* Subcategory Filter */}
          {selectedCategory !== "All Categories" && subcategories[selectedCategory] && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-800 mb-3">
                Subcategory
              </label>
              <div className="space-y-2 bg-white/50 p-3 rounded-lg border border-green-200">
                <label className="flex items-center hover:bg-green-50 p-1 rounded transition-colors">
                  <input
                    type="radio"
                    name="subcategory"
                    checked={selectedSubcategory === ""}
                    onChange={() => {
                      setSelectedSubcategory("");
                      setCurrentPage(1);
                    }}
                    className="h-4 w-4 text-green-600 border-green-300 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 font-medium">All</span>
                </label>
                {subcategories[selectedCategory].map((subcat) => (
                  <label key={subcat} className="flex items-center hover:bg-green-50 p-1 rounded transition-colors">
                    <input
                      type="radio"
                      name="subcategory"
                      checked={selectedSubcategory === subcat}
                      onChange={() => {
                        setSelectedSubcategory(subcat);
                        setCurrentPage(1);
                      }}
                      className="h-4 w-4 text-green-600 border-green-300 focus:ring-green-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 font-medium">{subcat}</span>
                  </label>
                ))}
              </div>
            </div>
          )}          {/* Price Range Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-3">
              Price Range
            </label>
            <div className="space-y-2 bg-white/50 p-3 rounded-lg border border-green-200">
              {priceRanges.map((range) => (
                <label key={range.label} className="flex items-center hover:bg-green-50 p-1 rounded transition-colors">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={selectedPriceRange.label === range.label}
                    onChange={() => {
                      setSelectedPriceRange(range);
                      setCustomPriceMin("");
                      setCustomPriceMax("");
                      setCurrentPage(1);
                    }}
                    className="h-4 w-4 text-green-600 border-green-300 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 font-medium">
                    {range.label}
                  </span>
                </label>
              ))}
            </div>            {/* Custom Price Range */}
            <div className="mt-3 space-y-2 bg-white/50 p-3 rounded-lg border border-green-200">
              <label className="block text-xs text-gray-700 font-medium">Custom Range</label>
              <div className="flex items-center space-x-2 w-full">
                <input
                  type="number"
                  placeholder="Min"
                  value={customPriceMin}
                  onChange={(e) => {
                    setCustomPriceMin(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-[40%] px-2 py-1 text-sm border border-green-300 rounded focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
                <span className="text-sm text-gray-600 font-medium">-</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={customPriceMax}
                  onChange={(e) => {
                    setCustomPriceMax(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-[40%] px-2 py-1 text-sm border border-green-300 rounded focus:ring-1 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>          {/* Condition Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-3">
              Condition
            </label>
            <div className="space-y-2 bg-white/50 p-3 rounded-lg border border-green-200">
              {conditions.map((condition) => (
                <label key={condition} className="flex items-center hover:bg-green-50 p-1 rounded transition-colors">
                  <input
                    type="radio"
                    name="condition"
                    checked={selectedCondition === condition}
                    onChange={() => {
                      setSelectedCondition(condition);
                      setCurrentPage(1);
                    }}
                    className="h-4 w-4 text-green-600 border-green-300 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 font-medium">{condition}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Brand Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-3">
              Brand
            </label>
            <div className="space-y-2 bg-white/50 p-3 rounded-lg border border-green-200">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center hover:bg-green-50 p-1 rounded transition-colors">
                  <input
                    type="radio"
                    name="brand"
                    checked={selectedBrand === brand}
                    onChange={() => {
                      setSelectedBrand(brand);
                      setCurrentPage(1);
                    }}
                    className="h-4 w-4 text-green-600 border-green-300 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 font-medium">{brand}</span>
                </label>
              ))}
            </div>
          </div>          {/* Mobile Apply Button */}
          <div className="lg:hidden mt-6 pt-6 border-t border-green-200">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-md hover:from-green-700 hover:to-emerald-700 font-medium transition-all duration-200"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;
