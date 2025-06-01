
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 xs:py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6 leading-tight">
              <span className="text-green-600">Eco-friendly</span> products for
              a{" "}
              <span className="text-emerald-600 block sm:inline lg:block xl:inline">
                greener lifestyle
              </span>
            </h1>

            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 mb-4 xs:mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover sustainable second-hand treasures that reduce waste and
              promote environmental responsibility while saving you money.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-sm xs:max-w-md mx-auto lg:mx-0">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 xs:py-3 sm:py-4 px-5 xs:px-6 sm:px-8 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 text-xs xs:text-sm sm:text-base">
                Explore Products
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-2.5 xs:py-3 sm:py-4 px-5 xs:px-6 sm:px-8 rounded-lg transition-all duration-200 text-xs xs:text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="bg-gradient-to-br from-green-200 to-emerald-300 rounded-full aspect-square flex items-center justify-center shadow-xl">
                <div className="bg-white rounded-full w-4/5 h-4/5 flex items-center justify-center shadow-lg">
                  <svg
                    className="w-1/2 h-1/2 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
              </div>
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-2 xs:-top-4 -right-2 xs:-right-4 w-6 h-6 xs:w-8 xs:h-8 sm:w-12 sm:h-12 bg-yellow-400 rounded-full opacity-80 animate-bounce-slow"></div>
              <div className="absolute -bottom-3 xs:-bottom-6 -left-3 xs:-left-6 w-5 h-5 xs:w-6 xs:h-6 sm:w-10 sm:h-10 bg-blue-400 rounded-full opacity-60 animate-pulse-slow"></div>
              <div className="absolute top-1/2 -left-4 xs:-left-8 w-3 h-3 xs:w-4 xs:h-4 sm:w-6 sm:h-6 bg-purple-400 rounded-full opacity-70 animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
