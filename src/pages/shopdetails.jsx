import { useState, useEffect } from "react";
import axios from "axios";
import "./shopdetails.css";

const API_URL = process.env.REACT_APP_LOCAL_API_URL;


function Shop() {
  const [shopname, setShopname] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [owner, setOwner] = useState("");
  const [open, setOpen] = useState("");
  const [shopType, setShopType] = useState("");
  const [savedData, setSavedData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const [loading, setLoading] = useState(true);

  // ✅ Load shop data from backend only
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/shops`);
        if (res.data && res.data.length > 0) {
          const shop = res.data[0];
          setSavedData(shop);
          setShopname(shop.shopname || "");
          setLocation(shop.location || "");
          setContact(shop.contact || "");
          setEmail(shop.email || "");
          setOwner(shop.owner || "");
          setOpen(shop.open || "");
          setShopType(shop.shopType || "");
          setIsEditing(false);
        }
      } catch (err) {
        console.error("❌ Error fetching shop data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    const data = { shopname, location, contact, email, owner, open, shopType };

    try {
      let res;
      if (savedData?._id) {
        res = await axios.put(`${API_URL}/shops/${savedData._id}`, data);
      } else {
        res = await axios.post(`${API_URL}/shops`, data);
      }
      setSavedData(res.data);
      setIsEditing(false);
    } catch (err) {
      console.error("❌ Error saving shop:", err);
      alert("Error saving shop. Check backend connection!");
    }
  };

  if (loading) return <p>Loading shop data...</p>;

  return (
    <div className="shop-container">
      {isEditing ? (
        <form onSubmit={handleSave}>
          <h1>Enter Shop Details</h1>

          <label>Shop Name:</label>
          <input type="text" value={shopname} onChange={(e) => setShopname(e.target.value)} required />

          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />

          <label>Contact Number:</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Owner Name:</label>
          <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} required />

          <label>Opening Hours:</label>
          <input type="text" value={open} placeholder="9am to 9pm" onChange={(e) => setOpen(e.target.value)} required />

          <label>Shop Type:</label>
          <select value={shopType} onChange={(e) => setShopType(e.target.value)} required>
            <option value="">Select</option>
            <option value="retail">Retail</option>
            <option value="food">Food</option>
            <option value="service">Service</option>
            <option value="other">Other</option>
          </select>

          <div className="btn-group">
            <button type="submit">Save</button>
          </div>
        </form>
      ) : (
        savedData && (
          <div className="shop-details">
            <h2>Shop Details</h2>
            <p><strong>Shop Name:</strong> {savedData.shopname}</p>
            <p><strong>Location:</strong> {savedData.location}</p>
            <p><strong>Contact:</strong> {savedData.contact}</p>
            <p><strong>Email:</strong> {savedData.email}</p>
            <p><strong>Owner:</strong> {savedData.owner}</p>
            <p><strong>Opening Hours:</strong> {savedData.open}</p>
            <p><strong>Shop Type:</strong> {savedData.shopType}</p>

            <div className="btn-group">
              <button onClick={() => setIsEditing(true)}>Edit</button>
            </div>
          </div>
        )
      )}
      {!savedData && !isEditing && (
        <p style={{ textAlign: "center" }}>No shop data yet. Please add your shop details.</p>
      )}
    </div>
  );
}

export default Shop;
