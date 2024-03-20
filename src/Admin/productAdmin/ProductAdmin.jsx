import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

const ProductAdmin = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl">Product</h1>
      </div>
      <div className="mt-14">
        <AddProduct></AddProduct>
        <ProductList></ProductList>
        <div></div>
      </div>
    </div>
  );
};

export default ProductAdmin;
