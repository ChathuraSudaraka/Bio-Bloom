import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-green-600">${product.price}</span>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <div className="flex items-center mb-3">
          <span className="text-xs text-gray-500 mr-2">Eco-friendly</span>
          <div className="flex space-x-1">
            {product.certifications?.map((cert, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-1 py-0.5 rounded">
                {cert}
              </span>
            ))}
          </div>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
