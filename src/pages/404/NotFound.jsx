import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-green-200 opacity-30 select-none">
            404
          </h1>
          <div className="relative -mt-20 md:-mt-32">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              404
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-green-200/50 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have been recycled. Let's
            get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/"
              className="inline-block w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl"
            >
              🏠 Go Home
            </Link>
            <Link
              to="/shop"
              className="inline-block w-full sm:w-auto px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg shadow-lg hover:shadow-xl"
            >
              🛍️ Visit Shop
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center space-x-4 text-green-600/70">
          <div className="animate-bounce delay-100 text-2xl">♻️</div>
          <div className="animate-bounce delay-200 text-2xl">🌱</div>
          <div className="animate-bounce delay-300 text-2xl">🌍</div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default NotFound;
