import React from "react";
import Layout from "../../layout/Layout";

const servicesData = [
  {
    id: 1,
    title: "Plastic Items",
    image: "/image/2.jpg",
    description:
      "Recycle and trade plastic materials for a cleaner environment",
    link: "/Plastic_Item",
    color: "green",
  },
  {
    id: 2,
    title: "Glasses",
    image: "/image/5.png",
    description:
      "Give your old glasses a new life through our recycling program",
    link: "/Glasses",
    color: "blue",
  },
  {
    id: 3,
    title: "Tyres",
    image: "/image/6.jpg",
    description:
      "Turn old tyres into valuable resources with our recycling service",
    link: "/Tyre",
    color: "purple",
  },
  {
    id: 4,
    title: "Electronic Devices",
    image: "/image/8.jpg",
    description:
      "Safely recycle electronic waste and extract valuable components",
    link: "/Electronic_Device",
    color: "orange",
  },
  {
    id: 5,
    title: "Iron Bars",
    image: "/image/7.jpg",
    description: "Metal recycling services for iron and steel materials",
    link: "/Iron_Bar",
    color: "red",
  },
  {
    id: 6,
    title: "Books",
    image: "/image/9.jpg",
    description: "Give books a second chance through our book exchange program",
    link: "/Book",
    color: "indigo",
  },
];

const Services = () => {
  const getColorClasses = (color) => {
    const colors = {
      green: "from-green-400 to-emerald-600",
      blue: "from-blue-400 to-cyan-600",
      purple: "from-purple-400 to-violet-600",
      orange: "from-orange-400 to-amber-600",
      red: "from-red-400 to-rose-600",
      indigo: "from-indigo-400 to-blue-600",
    };
    return colors[color] || "from-gray-400 to-gray-600";
  };
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center relative">
              {/* Decorative elements */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Services
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto text-gray-600 leading-relaxed">
                Discover our comprehensive recycling and trading services. Join
                our eco-friendly marketplace and make a positive impact on the
                environment.
              </p>

              {/* Decorative icons */}
              <div className="flex justify-center items-center mt-8 space-x-8 opacity-60">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-emerald-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-12 xs:py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white h-full flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-52 lg:h-48 xl:h-52 overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(
                        service.color
                      )} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-base sm:text-lg mb-6 text-gray-600 leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      className={`inline-flex items-center justify-center px-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${getColorClasses(
                        service.color
                      )} hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm sm:text-base mt-auto`}
                    >
                      Explore Service
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClasses(
                        service.color
                      )} opacity-60`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-16 bg-green-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Mission
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Be part of the change. Start buying and selling sustainably today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
