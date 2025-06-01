import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all page components
import { Home } from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Services from "./pages/service/Services";
import Shop from "./pages/shop/shop";
import Register from "./pages/register/Register";
import Buy_And_Sale from "./pages/buy&sale/Buy_And_Sale";
import Add_Item_form from "./pages/addItem/Add_Item_form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buy_and_sale" element={<Buy_And_Sale />} />
        <Route path="/buy&sale" element={<Buy_And_Sale />} />
        <Route path="/add-item" element={<Add_Item_form />} />
        <Route path="/add_item" element={<Add_Item_form />} />
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
