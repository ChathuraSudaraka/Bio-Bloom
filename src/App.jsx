import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page components
import { Home } from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/service/Services";
import Shop from "./pages/shop/shop";
import BuyAndSale from "./pages/buy&sale/Buy&Sale";
import AddItem from "./pages/addItem/AddItem";
import NotFound from "./pages/404/NotFound";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";
import PasswordReset from "./pages/auth/PasswordReset";
import OAuthCallback from "./pages/auth/OAuthCallback";

// Import context providers
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/buy&sale" element={<BuyAndSale />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgot-password" element={<PasswordReset />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/auth/callback" element={<OAuthCallback />} />
          <Route path="/add-item" element={<AddItem />} />
          {/* 404 Not Found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
