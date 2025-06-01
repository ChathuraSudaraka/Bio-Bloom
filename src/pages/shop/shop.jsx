import React, { useState, useMemo } from "react";
import Layout from "../../layout/Layout";
import ShopFilters from "../../components/shop/ShopFilters";
import ShopHeader from "../../components/shop/ShopHeader";
import ProductGrid from "../../components/shop/ProductGrid";
import ShopPagination from "../../components/shop/ShopPagination";
import CartIndicator from "../../components/shop/CartIndicator";
import { sampleProducts } from "../../components/shop/shopData";

const priceRanges = [
  { label: "All Prices", min: 0, max: 10000 },
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $300", min: 100, max: 300 },
  { label: "$300 - $500", min: 300, max: 500 },
  { label: "$500+", min: 500, max: 10000 },
];

const Shop = () => {
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);
  const [customPriceMin, setCustomPriceMin] = useState("");
  const [customPriceMax, setCustomPriceMax] = useState("");

  // Search and sort states
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Cart state
  const [cart, setCart] = useState([]);

  // Mobile filter state
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All Categories" ||
        product.category === selectedCategory;
      const matchesSubcategory =
        !selectedSubcategory || product.subcategory === selectedSubcategory;
      const matchesCondition =
        selectedCondition === "All Conditions" ||
        product.condition === selectedCondition;
      const matchesBrand =
        selectedBrand === "All Brands" || product.brand === selectedBrand;      // Price filtering
      let priceMin = selectedPriceRange.min;
      let priceMax = selectedPriceRange.max;

      if (customPriceMin !== "" && customPriceMax !== "") {
        priceMin = parseFloat(customPriceMin) || 0;
        priceMax = parseFloat(customPriceMax) || 10000;
      } else if (customPriceMin !== "") {
        priceMin = parseFloat(customPriceMin) || 0;
      } else if (customPriceMax !== "") {
        priceMax = parseFloat(customPriceMax) || 10000;
      }

      const matchesPrice =
        product.price >= priceMin && product.price <= priceMax;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesSubcategory &&
        matchesCondition &&
        matchesBrand &&
        matchesPrice
      );
    });
  }, [
    searchTerm,
    selectedCategory,
    selectedSubcategory,
    selectedCondition,
    selectedBrand,
    selectedPriceRange,
    customPriceMin,
    customPriceMax,
  ]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "newest":
        return sorted.sort((a, b) => b.id - a.id);
      case "name":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted.sort(
          (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        );
    }
  }, [filteredProducts, sortBy]);

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleViewDetails = (product) => {
    // Handle view details functionality
    console.log("View details for:", product.name);
    // You can implement navigation to product detail page here
  };
  const clearFilters = () => {
    setSelectedCategory("All Categories");
    setSelectedSubcategory("");
    setSelectedCondition("All Conditions");
    setSelectedBrand("All Brands");
    setSelectedPriceRange(priceRanges[0]);
    setCustomPriceMin("");
    setCustomPriceMax("");
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Cart indicator */}
        <CartIndicator cart={cart} />

        <div className="mx-auto sm:px-6 px-4 lg:px-8 py-4 lg:py-8">          {/* Mobile Filter Button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-md shadow-sm hover:from-green-100 hover:to-emerald-100 transition-all duration-200"
            >
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
              </svg>
              <span className="text-sm font-medium text-green-700">Filters</span>
            </button>
          </div>

          <div className="flex gap-4 lg:gap-8">
            {/* Left Sidebar - Filters */}
            <ShopFilters
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedSubcategory={selectedSubcategory}
              setSelectedSubcategory={setSelectedSubcategory}
              selectedCondition={selectedCondition}
              setSelectedCondition={setSelectedCondition}
              selectedBrand={selectedBrand}
              setSelectedBrand={setSelectedBrand}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
              customPriceMin={customPriceMin}
              setCustomPriceMin={setCustomPriceMin}
              customPriceMax={customPriceMax}
              setCustomPriceMax={setCustomPriceMax}
              setCurrentPage={setCurrentPage}
              clearFilters={clearFilters}
              isOpen={isFilterOpen}
              setIsOpen={setIsFilterOpen}
            />

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Top Bar */}
              <ShopHeader
                sortedProducts={sortedProducts}
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />

              {/* Products Grid */}
              <ProductGrid
                currentProducts={currentProducts}
                clearFilters={clearFilters}
                addToCart={addToCart}
                handleViewDetails={handleViewDetails}
              />

              {/* Pagination */}
              <ShopPagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
