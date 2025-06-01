export function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
          Ready to Start Your Sustainable Journey?
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-green-100 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
          Join our community of eco-conscious buyers and sellers today and make a positive impact
        </p>
        <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center max-w-lg mx-auto">
          <button className="bg-white text-green-600 hover:bg-gray-50 font-semibold py-3 sm:py-4 lg:py-5 px-6 sm:px-10 lg:px-12 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base lg:text-lg">
            Start Selling Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 sm:py-4 lg:py-5 px-6 sm:px-10 lg:px-12 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base lg:text-lg">
            Browse Products
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
