import React from 'react';

const ShopHeader = ({
  sortedProducts,
  selectedCategory,
  searchTerm,
  sortBy,
  setSortBy
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            {sortedProducts.length} products found
          </span>
          {(selectedCategory !== "All Categories" || searchTerm) && (
            <span className="text-sm text-green-600">
              {searchTerm && `"${searchTerm}"`}
              {selectedCategory !== "All Categories" &&
                ` in ${selectedCategory}`}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <label className="text-sm text-gray-600">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest First</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
