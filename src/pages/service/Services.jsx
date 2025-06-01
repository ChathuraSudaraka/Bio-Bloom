import React from 'react';
import Layout from '../../layout/Layout';

const servicesData = [
  {
    id: 1,
    title: "Plastic Items",
    image: "/image/2.jpg",
    description: "Recycle and trade plastic materials for a cleaner environment",
    link: "/Plastic_Item",
    color: "green"
  },
  {
    id: 2,
    title: "Glasses",
    image: '/image/5.png',
    description: "Give your old glasses a new life through our recycling program",
    link: "/Glasses",
    color: "blue"
  },
  {
    id: 3,
    title: "Tyres",
    image: '/image/6.jpg',
    description: "Turn old tyres into valuable resources with our recycling service",
    link: "/Tyre",
    color: "purple"
  },
  {
    id: 4,
    title: "Electronic Devices",
    image: '/image/8.jpg',
    description: "Safely recycle electronic waste and extract valuable components",
    link: "/Electronic_Device",
    color: "orange"
  },
  {
    id: 5,
    title: "Iron Bars",
    image: '/image/7.jpg',
    description: "Metal recycling services for iron and steel materials",
    link: "/Iron_Bar",
    color: "red"
  },
  {
    id: 6,
    title: "Books",
    image: '/image/9.jpg',
    description: "Give books a second chance through our book exchange program",
    link: "/Book",
    color: "indigo"
  }
];

const Services = () => {

  const getColorClasses = (color) => {
    const colors = {
      green: 'from-green-400 to-emerald-600',
      blue: 'from-blue-400 to-cyan-600',
      purple: 'from-purple-400 to-violet-600',
      orange: 'from-orange-400 to-amber-600',
      red: 'from-red-400 to-rose-600',
      indigo: 'from-indigo-400 to-blue-600'
    };
    return colors[color] || 'from-gray-400 to-gray-600';
  };
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">        {/* Hero Section */}
        <section className="py-12 xs:py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 xs:mb-6 leading-tight">
                Our <span className="text-green-600">Services</span>
              </h1>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-gray-600 px-4">
                Discover our comprehensive recycling and trading services. Join our eco-friendly marketplace and make a positive impact on the environment.
              </p>
            </div>
          </div>
        </section>        {/* Services Grid */}
        <section className="py-12 xs:py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white mx-4 xs:mx-0"
                >
                  {/* Image Container */}
                  <div className="relative h-40 xs:h-48 sm:h-52 lg:h-48 xl:h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(service.color)} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>

                                    {/* Content */}
                  <div className="p-4 xs:p-6 sm:p-8">
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-3 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-sm xs:text-base sm:text-lg mb-4 xs:mb-6 text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    <a
                      href={service.link}
                      className={`inline-flex items-center px-3 xs:px-4 py-2 xs:py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${getColorClasses(service.color)} hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-xs xs:text-sm sm:text-base`}
                    >
                      Explore Service
                      <svg className="w-3 h-3 xs:w-4 xs:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClasses(service.color)} opacity-60`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>        {/* Call to Action Section */}
        <section className="py-12 xs:py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="p-6 xs:p-8 sm:p-12 lg:p-16 rounded-2xl shadow-xl bg-white mx-4 xs:mx-0">
              <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 xs:mb-4 sm:mb-6 text-gray-900">
                Ready to Start Recycling?
              </h2>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl mb-6 xs:mb-8 sm:mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join thousands of eco-conscious individuals making a difference. Start your recycling journey today!
              </p>
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center max-w-md mx-auto">
                <a
                  href="/register"
                  className="px-4 xs:px-6 py-2.5 xs:py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105 text-sm xs:text-base"
                >
                  Get Started
                </a>
                <a
                  href="/contact"
                  className="px-4 xs:px-6 py-2.5 xs:py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 text-sm xs:text-base"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;

