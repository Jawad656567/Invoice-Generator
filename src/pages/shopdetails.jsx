import { useState } from "react";

function Shop() {
  const [shopname, setshopname] = useState("");
  const [location, setlocation] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [owner, setowner] = useState("");
  const [open, setopen] = useState("");
  const [shopType, setShopType] = useState("");
  const [savedData, setSavedData] = useState(null);
  const [isEditing, setIsEditing] = useState(true); // yeh control karega form dikhana hai ya data

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
    setIsEditing(false); // save karne ke baad form hide kar do
  };

  return (
    <div>
      <h1>Enter Shop Details</h1>

      {isEditing ? (
        <form onSubmit={handler}>
          <label>Shop Name:</label>
          <input
            type="text"
            value={shopname}
            onChange={(e) => setshopname(e.target.value)}
          />

          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />

          <label>Contact Number:</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />

          <label>Owner Name:</label>
          <input
            type="text"
            value={owner}
            onChange={(e) => setowner(e.target.value)}
          />

          <label>Opening Hours:</label>
          <input
            type="text"
            value={open}
            placeholder="9am to 9pm"
            onChange={(e) => setopen(e.target.value)}
          />

          <label>Shop Type:</label>
          <select
            value={shopType}
            onChange={(e) => setShopType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="retail">Retail</option>
            <option value="food">Food</option>
            <option value="service">Service</option>
            <option value="other">Other</option>
          </select>

          <br />
          <br />

          <button type="submit">Save</button>
        </form>
      ) : (
        savedData && (
          <div style={{ marginTop: "20px" }}>
            <h2>Shop Details</h2>
            <p>
              <strong>Shop Name:</strong> {savedData.shopname}
            </p>
            <p>
              <strong>Location:</strong> {savedData.location}
            </p>
            <p>
              <strong>Contact:</strong> {savedData.contact}
            </p>
            <p>
              <strong>Email:</strong> {savedData.email}
            </p>
            <p>
              <strong>Owner:</strong> {savedData.owner}
            </p>
            <p>
              <strong>Opening Hours:</strong> {savedData.open}
            </p>
            <p>
              <strong>Shop Type:</strong> {savedData.shopType}
            </p>

            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        )
      )}
    </div>
  );
}

export default Shop;
