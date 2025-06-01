import { Link } from "react-router-dom";
import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube, 
  FaTiktok,
  FaWhatsapp 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 xs:py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 lg:gap-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-green-400 mb-3 xs:mb-4">
              Recycle Hub
            </h3>
            <p className="text-sm xs:text-base text-gray-300 mb-4 xs:mb-6 max-w-md leading-relaxed">
              Empowering communities to reduce waste and promote sustainability
              by connecting people to buy, sell, and recycle eco-friendly
              products.
            </p>            <div className="flex space-x-3 xs:space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FaTwitter className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FaFacebookF className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FaInstagram className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FaLinkedinIn className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FaYoutube className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FaTiktok className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <FaWhatsapp className="w-5 h-5 xs:w-6 xs:h-6" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-base xs:text-lg sm:text-xl font-semibold text-white mb-3 xs:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1.5 xs:space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/buy&sale"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Buy & Sale
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@recyclehub.com
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                0777659081
              </p>
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Recycle Hub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
