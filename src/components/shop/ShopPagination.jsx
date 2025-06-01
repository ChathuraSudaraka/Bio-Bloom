import React from 'react';

const ShopPagination = ({
  totalPages,
  currentPage,
  setCurrentPage
}) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex justify-center">
      <nav className="flex items-center space-x-2">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 2 && page <= currentPage + 2)
          ) {
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 text-sm border rounded-md ${
                  currentPage === page
                    ? "bg-green-600 text-white border-green-600"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            );
          } else if (
            (page === currentPage - 3 && page > 1) ||
            (page === currentPage + 3 && page < totalPages)
          ) {
            return (
              <span key={page} className="px-2 text-gray-500">
                ...
              </span>
            );
          }
          return null;
        })}

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default ShopPagination;
