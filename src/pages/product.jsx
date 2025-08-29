import { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";
import Footer from "../components/footer";

const API_URL = process.env.REACT_APP_API_URL;


function Detail() {
  const [step, setStep] = useState(1);
  const [customer, setCustomer] = useState({});
  const [products, setProducts] = useState([]);
  const [productAdded, setProductAdded] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [savedInvoice, setSavedInvoice] = useState(null);

  useEffect(() => {
    const savedStep = localStorage.getItem("step");
    const savedCustomer = localStorage.getItem("customer");
    const savedProducts = localStorage.getItem("products");
    const savedInvoiceData = localStorage.getItem("savedInvoice");

    if (savedStep) setStep(Number(savedStep));
    if (savedCustomer) setCustomer(JSON.parse(savedCustomer));
    if (savedProducts) setProducts(JSON.parse(savedProducts));
    if (savedInvoiceData) setSavedInvoice(JSON.parse(savedInvoiceData));
  }, []);

  useEffect(() => {
    localStorage.setItem("step", step);
    localStorage.setItem("customer", JSON.stringify(customer));
    localStorage.setItem("products", JSON.stringify(products));
    if (savedInvoice) {
      localStorage.setItem("savedInvoice", JSON.stringify(savedInvoice));
    }
  }, [step, customer, products, savedInvoice]);

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

  const handleSaveInvoice = async () => {
    if (!customer.name || products.length === 0) {
      alert("Customer details and at least one product are required!");
      return;
    }
    const invoiceData = { customer, products };
    try {
      const res = await axios.post(`${API_URL}/invoices`, invoiceData);
      setSavedInvoice(res.data);
      setStep(3);
      localStorage.removeItem("customer");
      localStorage.removeItem("products");
      localStorage.removeItem("step");
    } catch (err) {
      console.error("❌ Error saving invoice:", err);
      alert("Error saving invoice. Check backend connection!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setStep(1);
    setCustomer({});
    setProducts([]);
    setSavedInvoice(null);
    localStorage.clear();
  };

  return (
    <>
    <div>
      {step === 1 && (
        <form className="product-container" onSubmit={Submitcustomer}>
          <h1>Customer Details</h1>

          <label>Customer Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter customer name"
            defaultValue={customer.name || ""}
            required
          />

          <label>Address:</label>
          <textarea
            name="address"
            placeholder="Enter address"
            defaultValue={customer.address || ""}
            required
          />

          <label>Invoice Date:</label>
          <input
            type="date"
            name="invoiceDate"
            defaultValue={customer.invoiceDate || ""}
            required
          />

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
            <button type="button" onClick={handleReset}>
              Reset
            </button>
            <button type="button" onClick={handleSaveInvoice}>
              Next
            </button>
          </div>
        </form>
      )}

      {step === 3 && savedInvoice && (
        <div className="summary-container">
          <h1>Invoice Summary</h1>

          <h2>Customer Info</h2>
          <p><strong>Name:</strong> {savedInvoice.customer.name}</p>
          <p><strong>Address:</strong> {savedInvoice.customer.address}</p>
          <p><strong>Date:</strong> {savedInvoice.customer.invoiceDate}</p>

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
              {savedInvoice.products.map((p, index) => (
                <tr key={index}>
                  <td>{p.productName}</td>
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  <td>{p.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>
            Grand Total: {savedInvoice.products.reduce((sum, o) => sum + Number(o.total), 0)}
          </h3>

          <div className="button-group no-print">
            <button onClick={handlePrint}>🖨 Print</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
}

export default Detail;
