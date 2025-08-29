import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section - Logo & Info */}
        <div className="footer-brand">
          <h2 className="footer-logo">Invoice<span>App</span></h2>
          <p className="footer-desc">
            Simplify your business invoicing. Manage customers, products, and payments easily.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop Details</a></li>
            <li><a href="/product">Products</a></li>
          </ul>
        </div>

        {/* Right Section - Socials */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} InvoiceApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
