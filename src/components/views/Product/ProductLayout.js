import React from "react";
import ProductList from "./ProductList";
//https://stackoverflow.com/questions/44435141/remove-object-in-array-using-filter-and-splice-which-one-is-best-approach-in-ang
const ProductLayout = () => {
  return (
    <div>
      <h1>Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductLayout;
