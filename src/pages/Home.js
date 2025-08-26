import "./home.css";
// Home.js
function Home() {
  return (
   <div className="home-container">
  <h1>Welcome to My Invoice App</h1>
  <p>This app helps you manage shop details, customers, and products easily.</p>

  <div className="home-cards">
    <div className="home-card">
      <h2>Shop Details</h2>
      <p>Enter your shop or mall information here.</p>
    </div>
    <div className="home-card">
      <h2>Customer Details</h2>
      <p>Save and update customer information.</p>
    </div>
    <div className="home-card">
      <h2>Product Details</h2>
      <p>Add products and their pricing here.</p>
    </div>
  </div>
</div>

  );
}

export default Home;
