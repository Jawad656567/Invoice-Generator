import { useState } from "react";
import "./product.css";

function Detail() {
  const [step, setStep] = useState(1);
  const [customer, setCustomer] = useState({});
  const [products, setProducts] = useState([]);
  const [productAdded, setProductAdded] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const Submitcustomer = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    setCustomer(data);
    setStep(2);
  };

  const submitproduct = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    data.total = Number(data.price) * Number(data.quantity);
    setProducts((prev) => [...prev, data]);
    setProductAdded(true);
    setSuccessMessage("✅ Product successfully added!");
    setTimeout(() => setSuccessMessage(""), 2500);
    e.target.reset();
  };

  const handlePrint = () => {
    window.print();
  };

  const grandTotal = products.reduce((sum, o) => sum + Number(o.total), 0);

  const goToSummary = () => {
    if (products.length === 0) {
      alert("Please add at least one product!");
      return;
    }
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setCustomer({});
    setProducts([]);
  };

  return (
    <div>
     
      {step === 1 && (
        <form className="product-container" onSubmit={Submitcustomer}>
          <h1>Customer Details</h1>

          <label>Customer Name:</label>
          <input type="text" name="name" placeholder="Enter customer name" required />

          <label>Address:</label>
          <textarea name="address" placeholder="Enter address" required></textarea>

          <label>Invoice Date:</label>
          <input type="date" name="invoiceDate" required />

          <div className="button-group no-print">
            <button type="submit">Next →</button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form className="product-container" onSubmit={submitproduct}>
          <h1>Product Details</h1>

          <label>Product Name:</label>
          <input type="text" name="productName" required />

          <label>Price:</label>
          <input type="number" name="price" required />

          <label>Quantity:</label>
          <input type="number" name="quantity" required />

          <label>Description:</label>
          <textarea name="description"></textarea>

          {productAdded && <p className="success-text">{successMessage}</p>}

          <div className="button-group no-print">
            <button type="submit">Add Product</button>
            <button type="button" onClick={handleReset}>Reset</button>
            <button type="button" onClick={goToSummary}>Next</button>
          </div>
        </form>
      )}

     
      {step === 3 && (
        <div className="summary-container">
          <h1>Invoice Summary</h1>

          <h2>Customer Info</h2>
          <p><strong>Name:</strong> {customer.name}</p>
          <p><strong>Address:</strong> {customer.address}</p>
          <p><strong>Date:</strong> {customer.invoiceDate}</p>

          <h2>Products</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={index}>
                  <td>{p.productName}</td>
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  <td>{p.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Grand Total: {grandTotal}</h3>

          <div className="button-group no-print">
            <button onClick={handlePrint}>🖨 Print</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
