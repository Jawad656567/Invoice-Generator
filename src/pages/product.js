import Button from '../components/addAnotherButton'; 
import "./product.css";

function Product() {
    return (
        
            <div className="product-container">
                <h1>Enter Product Details</h1>
                <form>
                    <label>
                        Product Name:
                        <input type="text" name="productName" required />
                    </label>
                    <label>
                        Price:
                        <input type="number" name="price" required />
                    </label>
                    <label>
                        Quantity:
                        <input type="number" name="quantity" required />
                    </label>
                    <label>
                        Description:
                        <textarea name="description"></textarea>
                    </label>

                    <div className="button-group">
                        <button type="submit">Add Product</button>
                        <Button />
                        <button type="reset">Reset</button>
                    </div>
                </form>
            </div>
       
    );
}

export default Product;
