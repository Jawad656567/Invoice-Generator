import "./shopdetails.css";

function Shop() {
  return (
    <div className="shop-container">
      <h1>Enter Shop or Mall Details</h1>
      <form>
        <label>
          Shop Name:
          <input type="text" name="shopName" required />
        </label>

        <label>
          Location:
          <input type="text" name="location" required />
        </label>

        <label>
          Contact Number:
          <input type="tel" name="contactNumber" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Owner Name:
          <input type="text" name="ownerName" />
        </label>

        <label>
          Opening Hours:
          <input
            type="text"
            name="openingHours"
            placeholder="e.g. 9am - 9pm"
          />
        </label>

        <label>
          Shop Type:
          <select name="shopType">
            <option value="">Select</option>
            <option value="retail">Retail</option>
            <option value="food">Food</option>
            <option value="service">Service</option>
            <option value="other">Other</option>
          </select>
        </label>

        <div className="btn-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Shop;
