import React from 'react';
import ProductCard from '../itemCard/ProductCard';

const ProductGrid = ({
  currentProducts,
  clearFilters,
  addToCart,
  handleViewDetails
}) => {
  if (currentProducts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6M9 20h6a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No products found
        </h3>
        <p className="text-gray-600 mb-4">
          Try adjusting your search terms or filters
        </p>
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Clear Filters
        </button>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
      {currentProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
          onViewDetails={handleViewDetails}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
