import Home from "./pages/Home";
import Shop from "./pages/shopdetails";
import Product from "./pages/product";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './navbar.css';
import "./global.css";

function App() {
  return (
    <Router>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop Details</Link></li>
        <li><Link to="/product"> Details</Link></li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
