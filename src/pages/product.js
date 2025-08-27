import { useState } from "react";

{step===1&&(
    <form onSubmit={sumbitcustomernext}>
<label>Customer Name:</label>
    <input type="text" name="name" placeholder="Enter customer name" required />

    <label>Address:</label>
    <textarea name="address" placeholder="Enter address" required></textarea>

    <label>Invoice Date:</label>
    <input type="date" name="invoiceDate" required />

    <button className="btn" type="submit">
      Next →
    </button>

    </form>
)}


{step === 2 && (
  <form onSubmit={submitProduct}>
    <h1>Product Details</h1>

    <label>Product Name:</label>
    <input type="text" name="productName" required />

    <label>Price:</label>
    <input type="number" name="price" required />

    <label>Quantity:</label>
    <input type="number" name="quantity" required />

    <label>Description:</label>
    <textarea name="description"></textarea>

    <div className="button-group">
      <button type="submit">Add Product</button>
      <button type="reset">Reset</button>
      <button type="button" onClick={goToSummary}>Next →</button>
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
      <td>${p.price}</td>
      <td>{p.quantity}</td>
      <td>${p.total}</td>
    </tr>
  ))}
</tbody>

       
    </table>

    <h3>Grand Total: ${grandTotal}</h3>

    <div className="button-group no-print">
      <button onClick={handlePrint}>🖨 Print</button>
      <button onClick={handlePrint}>⬇ Save as PDF</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  </div>
)}


const handlePrint = () => {
  window.print();
};

const grandTotal = products.reduce((sum, p) => sum + Number(p.total), 0);


const handleReset=(e)=>{
e.preventDefault();
 setstep(1);
 setCustomer({});
  setProducts([]);
   setProductAdded(false);
  setSuccessMessage("");
}
const goToSummary=()=>{
    if (goToSummary==0){
        alert ("please add product");
        return;
    }
    setstep(3);
}
