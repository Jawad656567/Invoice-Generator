import Home from "./pages/Home";
import Shop from "./pages/shopdetails";
import Customer from "./pages/customer";
import Product from "./pages/product";
import Detail from "./pages/customers_product";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './navbar.css';
import "./global.css";

function App() {
  return (
    <Router>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop Details</Link></li>
        <li><Link to="/customer">Customer Details</Link></li>
        <li><Link to="/product">Product Details</Link></li>
        <li><Link to="/detail">Customer-Products</Link></li>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
