export function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">How It Works</h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
            Simple steps to start your sustainable shopping journey
          </p>
        </div>        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          <div className="text-center relative">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8">
                <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-green-600">1</span>
              </div>
              {/* Line from step 1 to step 2 */}
              <div className="hidden md:block absolute top-6 sm:top-8 lg:top-10 left-1/2 w-full h-0.5 bg-green-200 transform translate-x-6 sm:translate-x-8 lg:translate-x-10 -ml-2"></div>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4">Browse Products</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-2">Explore our wide selection of quality second-hand items</p>
          </div>

          <div className="text-center relative">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8">
                <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-green-600">2</span>
              </div>
              {/* Line from step 2 to step 3 */}
              <div className="hidden md:block absolute top-6 sm:top-8 lg:top-10 left-1/2 w-full h-0.5 bg-green-200 transform translate-x-6 sm:translate-x-8 lg:translate-x-10 -ml-2"></div>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4">Make Purchase</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-2">Secure checkout with multiple payment options available</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8">
              <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 lg:mb-4">Enjoy & Impact</h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-2">Get your items delivered and make a positive environmental impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
