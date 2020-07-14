import React, { useEffect } from "react";
import { getAllProducts, getCartList } from "../../../actions/postActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AddToCartButton } from "./AddToCartButton";
// import ShoppingCart from "../shoppingCart.js/ShoppingCart";

const ProductList = (props) => {
  useEffect(() => {
    props.getAllProducts();
  }, []);

  // when I console.log it shows the data which user clicked.
  console.log(props.cartList);
  const addToCart = async (item) => {
    props.getCartList(item);
  };

  return (
    <div>
      {props.products.map((x) => (
        <div key={x.id}>
          <img className="productImg" src={x.image} alt={x.title} />
          <h4>{x.title}</h4>
          <p>{x.price}€</p>
          <button onClick={() => addToCart(x)}>test cart</button>
          <AddToCartButton />
        </div>
      ))}

      <div>
        {props.cartList &&
          props.cartList.map((x) => <li key={x.id}>{x.title}</li>)}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  getCartList: PropTypes.func.isRequired,
  cartList: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  products: state.items.allItems,
  cartList: state.items.cart,
});

export default connect(mapStateToProps, { getAllProducts, getCartList })(
  ProductList
);
