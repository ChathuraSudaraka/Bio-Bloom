export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
            Why Choose Recycle Hub?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Join thousands of eco-conscious consumers making a positive impact on our planet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <div className="group text-center p-6 sm:p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all duration-300 hover:bg-green-50 mx-4 sm:mx-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Sustainable Impact
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Every purchase helps reduce waste and promotes circular economy principles for a better tomorrow
            </p>
          </div>

          <div className="group text-center p-6 sm:p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all duration-300 hover:bg-blue-50 mx-4 sm:mx-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Quality Guaranteed
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              All items are thoroughly inspected, verified, and backed by our quality assurance program
            </p>
          </div>

          <div className="group text-center p-6 sm:p-8 lg:p-10 rounded-2xl hover:shadow-xl transition-all duration-300 hover:bg-purple-50 mx-4 sm:mx-0 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Great Prices
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Save money while making environmentally conscious choices that benefit both you and the planet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
