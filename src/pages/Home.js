import "./home.css";
import Clickable from "../components/clickable.jsx";
import Footer from "../components/footer.jsx"

function Home() {
  return (
    <>
    <div className="home-container">
      <div className="home-background">
        <div className="bg-shape-1"></div>
        <div className="bg-shape-2"></div>
      </div>
      
      <div className="home-content">
        <div className="text-content">
          <h1 className="home-title">
            <span className="title-accent">Streamline</span> Your Business 
            <br />Invoicing Process
          </h1>
          <p className="home-subtitle">
            Professional invoicing solution that helps you manage customers, 
            products, and payments efficiently. Save time and get paid faster 
            with our intuitive platform.
          </p>
          
          <div className="feature-highlights">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Create professional invoices in seconds</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Track payments and manage cash flow</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <span>Access from anywhere, anytime</span>
            </div>
          </div>
          
          <Clickable />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Home;