export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">What Our Customers Say</h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600">Real stories from our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div className="bg-green-50 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">"Amazing quality products and fast delivery. I love supporting sustainable shopping!"</p>
            <div className="font-semibold text-gray-900 text-sm sm:text-base">Sarah Johnson</div>
            <div className="text-gray-600 text-xs sm:text-sm">Verified Buyer</div>
          </div>

          <div className="bg-blue-50 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">"Great prices and excellent customer service. Highly recommend for eco-conscious shoppers."</p>
            <div className="font-semibold text-gray-900 text-sm sm:text-base">Mike Chen</div>
            <div className="text-gray-600 text-xs sm:text-sm">Regular Customer</div>
          </div>

          <div className="bg-purple-50 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">"Found exactly what I was looking for. The platform makes sustainable shopping so easy!"</p>
            <div className="font-semibold text-gray-900 text-sm sm:text-base">Emma Davis</div>
            <div className="text-gray-600 text-xs sm:text-sm">Happy Customer</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
