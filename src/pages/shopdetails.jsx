import { useState, useEffect } from "react";
import axios from "axios";
import "./shopdetails.css";
import Footer from "../components/footer";

const API_URL = process.env.REACT_APP_API_URL;

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

  if (loading) return (
    <div className="shop-loading">
      <div className="loading-spinner"></div>
      <p>Loading shop data...</p>
    </div>
  );

  return (
    <>
    <div className="shop-container">
      {isEditing ? (
        <form onSubmit={handleSave} className="shop-form">
          <h1>Enter Shop Details</h1>

          <div className="form-grid">
            <div className="form-group">
              <label>Shop Name:</label>
              <input type="text" value={shopname} onChange={(e) => setShopname(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Location:</label>
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Contact Number:</label>
              <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Owner Name:</label>
              <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Opening Hours:</label>
              <input type="text" value={open} placeholder="9am to 9pm" onChange={(e) => setOpen(e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Shop Type:</label>
              <select value={shopType} onChange={(e) => setShopType(e.target.value)} required>
                <option value="">Select Shop Type</option>
                <option value="retail">Retail</option>
                <option value="food">Food</option>
                <option value="service">Service</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="btn-group">
            <button type="submit" className="btn-primary">Save Details</button>
          </div>
        </form>
      ) : (
        savedData && (
          <div className="shop-details">
            <div className="details-header">
              <h2>Shop Details</h2>
              <span className="shop-type">{savedData.shopType}</span>
            </div>
            
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-icon">🏪</span>
                <div>
                  <p className="detail-label">Shop Name</p>
                  <p className="detail-value">{savedData.shopname}</p>
                </div>
              </div>
              
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div>
                  <p className="detail-label">Location</p>
                  <p className="detail-value">{savedData.location}</p>
                </div>
              </div>
              
              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <div>
                  <p className="detail-label">Contact</p>
                  <p className="detail-value">{savedData.contact}</p>
                </div>
              </div>
              
              <div className="detail-item">
                <span className="detail-icon">📧</span>
                <div>
                  <p className="detail-label">Email</p>
                  <p className="detail-value">{savedData.email}</p>
                </div>
              </div>
              
              <div className="detail-item">
                <span className="detail-icon">👤</span>
                <div>
                  <p className="detail-label">Owner</p>
                  <p className="detail-value">{savedData.owner}</p>
                </div>
              </div>
              
              <div className="detail-item">
                <span className="detail-icon">🕒</span>
                <div>
                  <p className="detail-label">Opening Hours</p>
                  <p className="detail-value">{savedData.open}</p>
                </div>
              </div>
            </div>

            <div className="btn-group">
              <button onClick={() => setIsEditing(true)} className="btn-secondary">Edit Details</button>
            </div>
          </div>
        )
      )}
      {!savedData && !isEditing && (
        <div className="no-data">
          <div className="no-data-icon">🏪</div>
          <h3>No Shop Data Found</h3>
          <p>Please add your shop details to get started</p>
          <button onClick={() => setIsEditing(true)} className="btn-primary">Add Shop Details</button>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

export default Shop;