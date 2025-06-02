import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export default function Navigation_bar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { getCartItemsCount } = useCart();

  const cartItemsCount = getCartItemsCount();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const isActiveLink = (path) => {
    return location.pathname === path;
  };  const getLinkClasses = (path, isButton = false, isMobile = false) => {
    const baseClasses = isButton
      ? isMobile
        ? "w-full text-center px-6 py-4 rounded-xl text-base font-semibold transition-all duration-200 ease-out transform hover:scale-[1.02] active:scale-[0.98] focus:scale-[1.02] touch-manipulation min-h-[44px] flex items-center justify-center"
        : "px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ease-out transform hover:scale-[1.02] active:scale-[0.98] focus:scale-[1.02] shadow-lg hover:shadow-xl focus:shadow-xl touch-manipulation min-h-[44px] flex items-center justify-center"
      : isMobile
      ? "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-out hover:translate-x-1 focus:translate-x-1 active:translate-x-2 min-h-[44px] flex items-center touch-manipulation"
      : "px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 focus:-translate-y-0.5 active:translate-y-0 relative overflow-hidden min-h-[40px] flex items-center justify-center touch-manipulation";

    if (isButton) {
      return isActiveLink(path)
        ? `${baseClasses} bg-white text-green-700 shadow-lg ring-2 ring-green-300/50`
        : `${baseClasses} bg-green-800/90 hover:bg-white hover:text-green-700 focus:bg-white focus:text-green-700 text-white backdrop-blur-sm border border-green-500/40 hover:border-green-400 focus:border-green-400 focus:ring-2 focus:ring-green-300/50 focus:outline-none`;
    }

    return isActiveLink(path)
      ? `${baseClasses} text-white bg-white/25 shadow-lg ring-1 ring-white/20 ${
          !isMobile
            ? "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full focus:before:translate-x-full before:transition-transform before:duration-500"
            : ""
        }`
      : `${baseClasses} text-green-50 hover:text-white hover:bg-white/15 focus:text-white focus:bg-white/15 focus:ring-1 focus:ring-white/30 focus:outline-none ${
          !isMobile
            ? "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full focus:before:translate-x-full before:transition-transform before:duration-500"
            : ""
        }`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
      closeMenu();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  return (
    <nav className="bg-gradient-to-r from-green-600 via-green-600 to-green-700 text-white shadow-xl sticky top-0 z-50 border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 py-2">
            <Link
              to="/"
              className="flex items-center space-x-3 group"
              onClick={closeMenu}
            >
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5zM12 4.18L18.18 7 12 9.82 5.82 7 12 4.18zM4 8.5l7 3.5v8.3c-3.83-.89-7-4.54-7-8.3V8.5zm16 3.8c0 3.76-3.17 7.41-7 8.3V12l7-3.5v3.8z" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl lg:text-3xl font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                  Recycle Hub
                </span>
                <div className="text-xs text-green-100/80 font-medium tracking-wide">
                  Eco-Friendly Solutions
                </div>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1 xl:space-x-2">
              <Link to="/" className={getLinkClasses("/")}>
                Home
              </Link>
              <Link to="/about" className={getLinkClasses("/about")}>
                About
              </Link>
              <Link to="/services" className={getLinkClasses("/services")}>
                Services
              </Link>
              <Link to="/shop" className={getLinkClasses("/shop")}>
                Shop
              </Link>              <Link to="/contact" className={getLinkClasses("/contact")}>
                Contact
              </Link>              <Link to="/cart" className={getLinkClasses("/cart")}>
                <div className="flex items-center space-x-2 relative">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span>Cart</span>
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
              </Link>              <div className="ml-4 pl-4 border-l border-green-500/30">
                {user ? (
                  <div className="flex items-center space-x-3">
                    <Link
                      to="/profile"
                      className={getLinkClasses("/profile", true)}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{user.email?.split('@')[0] || 'Profile'}</span>
                      </div>
                    </Link>                    <button
                      onClick={handleSignOut}
                      className="px-4 py-2.5 rounded-lg text-sm font-medium text-red-200 hover:text-white hover:bg-red-600/25 focus:text-white focus:bg-red-600/25 focus:outline-none focus:ring-2 focus:ring-red-400/50 transition-all duration-200 ease-out min-h-[40px] touch-manipulation active:scale-95 transform"
                    >
                      Sign Out
                    </button>
                  </div>                ) : (
                  <div className="flex items-center space-x-3">
                    <Link
                      to="/login"
                      className="px-4 py-2.5 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-blue-600/25 focus:text-white focus:bg-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200 ease-out min-h-[40px] touch-manipulation active:scale-95 transform"
                    >
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Login</span>
                      </div>
                    </Link>
                    <Link
                      to="/register"
                      className={getLinkClasses("/register", true)}
                    >
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        <span>Register</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>{" "}
          {/* Mobile menu button */}          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-xl text-white hover:text-green-100 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/10 transition-all duration-200 ease-out backdrop-blur-sm min-h-[44px] min-w-[44px] touch-manipulation active:scale-95 transform"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                {!isMenuOpen ? (
                  <svg
                    className="block w-6 h-6 transform transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6 transform rotate-180 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 transform translate-y-0"
            : "max-h-0 opacity-0 overflow-hidden transform -translate-y-2"
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-3 bg-gradient-to-b from-green-700 to-green-800 border-t border-green-500/30 backdrop-blur-sm">
          <div className="space-y-2">
            <Link
              to="/"
              className={getLinkClasses("/", false, true)}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>Home</span>
              </div>
            </Link>
            <Link
              to="/about"
              className={getLinkClasses("/about", false, true)}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>About</span>
              </div>
            </Link>
            <Link
              to="/services"
              className={getLinkClasses("/services", false, true)}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Services</span>
              </div>
            </Link>
            <Link
              to="/shop"
              className={getLinkClasses("/shop", false, true)}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span>Shop</span>
              </div>
            </Link>            <Link
              to="/contact"
              className={getLinkClasses("/contact", false, true)}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Contact</span>
              </div>
            </Link>            <Link
              to="/cart"
              className={getLinkClasses("/cart", false, true)}
              onClick={closeMenu}
            >
              <div className="flex items-center space-x-3 relative">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span>Cart</span>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cartItemsCount}
                  </span>
                )}
              </div>
            </Link>          </div>          <div className="pt-4 border-t border-green-600/50">
            {user ? (
              <div className="space-y-2">
                <Link
                  to="/profile"
                  className={getLinkClasses("/profile", true, true)}
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{user.email?.split('@')[0] || 'Profile'}</span>
                  </div>
                </Link>                <button
                  onClick={handleSignOut}
                  className="w-full text-center px-6 py-4 rounded-xl text-base font-semibold transition-all duration-200 ease-out transform hover:scale-[1.02] active:scale-[0.98] focus:scale-[1.02] bg-red-600/90 hover:bg-red-600 focus:bg-red-600 text-white focus:outline-none focus:ring-2 focus:ring-red-400/50 min-h-[44px] touch-manipulation"
                >
                  Sign Out
                </button>
              </div>            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  className="w-full text-center px-6 py-4 rounded-xl text-base font-semibold transition-all duration-200 ease-out transform hover:scale-[1.02] active:scale-[0.98] focus:scale-[1.02] bg-blue-600/90 hover:bg-blue-600 focus:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 min-h-[44px] touch-manipulation"
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Login</span>
                  </div>
                </Link>
                <Link
                  to="/register"
                  className={getLinkClasses("/register", true, true)}
                  onClick={closeMenu}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Register</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
