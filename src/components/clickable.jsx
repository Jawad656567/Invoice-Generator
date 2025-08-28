import { useState, useEffect } from "react";
import axios from "axios";

function HomeCard() {
  const [text, setText] = useState("Enter your shop or mall information here.");
  const [savedData, setSavedData] = useState(null);

  // Load existing data from backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/shops");
        if (res.data.length > 0) {
          // Assuming first shop for demo
          setSavedData(res.data[0]);
          setText(res.data[0].shopname);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const handleBlur = async (e) => {
    const newText = e.target.innerText;
    setText(newText);

    // Send updated text to backend
    try {
      let res;
      if (savedData) {
        // Update existing shop
        res = await axios.put(
          `http://localhost:5000/api/shops/${savedData._id}`,
          { shopname: newText }
        );
      } else {
        // Create new shop
        res = await axios.post("http://localhost:5000/api/shops", {
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
      console.error("Error saving to backend:", err);
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
