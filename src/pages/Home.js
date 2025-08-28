import "./home.css";
import Clickable from "../components/clickable.jsx";
function Home() {
  return (
   <div className="home-container">
  <h1>Welcome to My Invoice App</h1>
  <p>This app helps you manage shop details, customers, and products easily.</p>
  <Clickable /> 
  </div>


  );
}

export default Home;
