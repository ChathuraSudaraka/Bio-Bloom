export function StatisticsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">10K+</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">25K+</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Products Sold</div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">15K+</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Tons Recycled</div>
          </div>
          <div className="text-center p-4 sm:p-6">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-1 sm:mb-2">98%</div>
            <div className="text-xs sm:text-sm lg:text-base text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
