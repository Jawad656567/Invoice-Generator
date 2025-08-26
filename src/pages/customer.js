import "./customer.css";

function Customer() {
  return (
    
      <div className="customer-container">
        <h2>Customer Info</h2>
        <form id="customerForm">
          <label>Customer Name:</label>
          <input type="text" name="name" placeholder="Enter customer name" />

          <label>Address:</label>
          <textarea name="address" placeholder="Enter address"></textarea>

          <label>Invoice Date:</label>
          <input type="date" id="invoiceDate" readOnly />

          <label>Invoice No:</label>
          <input type="text" id="invoiceNo" readOnly />

          <button type="submit">Save Customer</button>
        </form>
      </div>
 
  );
}

export default Customer;
