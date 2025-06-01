import { useState } from "react";
import ProductCard from "../itemCard/ProductCard";

function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Electronics",
    "Furniture",
    "Clothing",
    "Books",
    "Sports",
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Refurbished Laptop",
      description: "High-performance laptop refurbished to like-new condition",
      price: 299,
      category: "Electronics",
      image: "/image/1.jpg",
      certifications: ["Certified", "Warranty"],
    },
    {
      id: 2,
      name: "Vintage Chair",
      description: "Beautiful vintage wooden chair, restored and eco-friendly",
      price: 89,
      category: "Furniture",
      image: "/image/2.jpg",
      certifications: ["Eco-friendly", "Restored"],
    },
    {
      id: 3,
      name: "Designer Jacket",
      description: "Pre-loved designer jacket in excellent condition",
      price: 45,
      category: "Clothing",
      image: "/image/3.png",
      certifications: ["Authentic", "Quality"],
    },
    {
      id: 4,
      name: "Classic Books Set",
      description: "Collection of classic literature books in great condition",
      price: 25,
      category: "Books",
      image: "/image/4.jpg",
      certifications: ["Complete", "Good Condition"],
    },
    {
      id: 5,
      name: "Bicycle",
      description:
        "Mountain bike in excellent condition, perfect for outdoor adventures",
      price: 150,
      category: "Sports",
      image: "/image/5.png",
      certifications: ["Serviced", "Ready to Ride"],
    },
    {
      id: 6,
      name: "Coffee Table",
      description: "Solid wood coffee table, sustainably sourced materials",
      price: 75,
      category: "Furniture",
      image: "/image/6.jpg",
      certifications: ["Sustainable", "Handcrafted"],
    },
  ];
  const filteredProducts = featuredProducts.filter((product) => {
    return selectedCategory === "All" || product.category === selectedCategory;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing second-hand items that are good for you and the
            environment
          </p>{" "}
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-green-600 text-white shadow-md transform scale-105"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-green-300"
              }`}
            >
              {category}
            </button>
          ))}        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;
