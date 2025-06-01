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
  setCurrentPage,
  clearFilters
}) => {
  return (
    <div className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
          <button
            onClick={clearFilters}
            className="text-sm text-green-600 hover:text-green-800"
          >
            Clear All
          </button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search
          </label>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Category
          </label>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => {
                    setSelectedCategory(category);
                    setSelectedSubcategory("");
                    setCurrentPage(1);
                  }}
                  className="h-4 w-4 text-green-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Subcategory Filter */}
        {selectedCategory !== "All Categories" && subcategories[selectedCategory] && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Subcategory
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="subcategory"
                  checked={selectedSubcategory === ""}
                  onChange={() => {
                    setSelectedSubcategory("");
                    setCurrentPage(1);
                  }}
                  className="h-4 w-4 text-green-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">All</span>
              </label>
              {subcategories[selectedCategory].map((subcat) => (
                <label key={subcat} className="flex items-center">
                  <input
                    type="radio"
                    name="subcategory"
                    checked={selectedSubcategory === subcat}
                    onChange={() => {
                      setSelectedSubcategory(subcat);
                      setCurrentPage(1);
                    }}
                    className="h-4 w-4 text-green-600 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{subcat}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Price Range Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Price Range
          </label>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center">
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
                  className="h-4 w-4 text-green-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">
                  {range.label}
                </span>
              </label>
            ))}
          </div>

          {/* Custom Price Range */}
          <div className="mt-3 space-y-2">
            <label className="block text-xs text-gray-600">Custom Range</label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={customPriceMin}
                onChange={(e) => {
                  setCustomPriceMin(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
              />
              <span className="text-sm text-gray-500">-</span>
              <input
                type="number"
                placeholder="Max"
                value={customPriceMax}
                onChange={(e) => {
                  setCustomPriceMax(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Condition Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Condition
          </label>
          <div className="space-y-2">
            {conditions.map((condition) => (
              <label key={condition} className="flex items-center">
                <input
                  type="radio"
                  name="condition"
                  checked={selectedCondition === condition}
                  onChange={() => {
                    setSelectedCondition(condition);
                    setCurrentPage(1);
                  }}
                  className="h-4 w-4 text-green-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{condition}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Brand
          </label>
          <div className="space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center">
                <input
                  type="radio"
                  name="brand"
                  checked={selectedBrand === brand}
                  onChange={() => {
                    setSelectedBrand(brand);
                    setCurrentPage(1);
                  }}
                  className="h-4 w-4 text-green-600 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFilters;
