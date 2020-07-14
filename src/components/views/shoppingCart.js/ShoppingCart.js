import React from "react";
import { connect } from "react-redux";

const ShoppingCart = ({ cart }) => {
  console.log(cart, "here is the cart");

  return (
    <div>
      <div>
        <h4>Cart</h4>

        <ul>{cart && cart.map((x) => <li>{x.title}</li>)}</ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.items.users,
    cart: state.items.cart,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
