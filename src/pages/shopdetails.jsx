import { useState } from "react";
import "./shopdetails.css";

function Shop() {
  const [shopname, setshopname] = useState("");
  const [location, setlocation] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [owner, setowner] = useState("");
  const [open, setopen] = useState("");
  const [shopType, setShopType] = useState("");
  const [savedData, setSavedData] = useState(null);
  const [isEditing, setIsEditing] = useState(true);

  const handler = (e) => {
    e.preventDefault();
    setSavedData({
      shopname,
      location,
      contact,
      email,
      owner,
      open,
      shopType,
    });
    setIsEditing(false);
  };

  return (
    <div className="shop-container">
      

      {isEditing ? (
        <form onSubmit={handler}>
          <h1>Enter Shop Details</h1>
          <label>Shop Name:</label>
          <input
            type="text"
            value={shopname}
            onChange={(e) => setshopname(e.target.value)}
            required
          />

          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            required
          />

          <label>Contact Number:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />

          <label>Owner Name:</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setowner(e.target.value)}
            required
          />

          <label>Opening Hours:</label>
          <input
            type="text"
            value={open}
            placeholder="9am to 9pm"
            onChange={(e) => setopen(e.target.value)}
            required
          />

          <label>Shop Type:</label>
          <select
            value={shopType}
            onChange={(e) => setShopType(e.target.value)}
            required
          >
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
          <div>
            <h2 style={{ textAlign: "center", color: "#6a1b9a" }}>
              Shop Details
            </h2>
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
    </div>
  );
}

export default Shop;
