import { useState, useEffect } from "react";
import axios from "axios";


const API_URL = process.env.REACT_APP_API_URL;

function HomeCard() {
  const [text, setText] = useState("Enter your shop or mall information here.");
  const [savedData, setSavedData] = useState(null);

  // Load existing data from backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/shops`);
        if (res.data.length > 0) {
          const shop = res.data[0]; // assuming first shop for demo
          setSavedData(shop);
          setText(shop.shopname || "Enter your shop or mall information here.");
        }
      } catch (err) {
        console.error("❌ Error fetching shop data:", err);
      }
    };
    fetchData();
  }, []);

  const handleBlur = async (e) => {
    const newText = e.target.innerText;
    setText(newText);

    try {
      let res;
      if (savedData) {
        // Update existing shop
        res = await axios.put(`${API_URL}/shops/${savedData._id}`, {
          ...savedData,
          shopname: newText,
        });
      } else {
        // Create new shop
        res = await axios.post(`${API_URL}/shops`, {
          shopname: newText,
          location: "",
          contact: "",
          email: "",
          owner: "",
          open: "",
          shopType: "",
        });
      }
      setSavedData(res.data);
    } catch (err) {
      console.error("❌ Error saving shop data:", err);
    }
  };

  return (
    <div className="home-cards">
      <div
        className="home-card"
        contentEditable
        suppressContentEditableWarning={true}
        onBlur={handleBlur}
      >
        {text}
      </div>
    </div>
  );
}

export default HomeCard;
