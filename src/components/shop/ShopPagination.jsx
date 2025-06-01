import React from 'react';

const ShopPagination = ({
  totalPages,
  currentPage,
  setCurrentPage
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const getVisiblePages = () => {
    const isMobile = window.innerWidth < 768;
    const maxVisible = isMobile ? 3 : 5;
    const halfMax = Math.floor(maxVisible / 2);
    
    let start = Math.max(1, currentPage - halfMax);
    let end = Math.min(totalPages, start + maxVisible - 1);
    
    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }
    
    return { start, end };
  };

  const { start, end } = getVisiblePages();

  return (
    <div className="mt-6 sm:mt-8 flex justify-center">
      <nav className="flex items-center space-x-1 sm:space-x-2">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-2 sm:px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Previous</span>
          <span className="sm:hidden">‹</span>
        </button>

        {start > 1 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className="px-2 sm:px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
            >
              1
            </button>
            {start > 2 && <span className="px-1 text-gray-500">...</span>}
          </>
        )}

        {[...Array(end - start + 1)].map((_, i) => {
          const page = start + i;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 sm:px-3 py-2 text-sm border rounded-md ${
                currentPage === page
                  ? "bg-green-600 text-white border-green-600"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          );
        })}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && <span className="px-1 text-gray-500">...</span>}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-2 sm:px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-2 sm:px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="hidden sm:inline">Next</span>
          <span className="sm:hidden">›</span>
        </button>
      </nav>
    </div>
  );
};

export default ShopPagination;
