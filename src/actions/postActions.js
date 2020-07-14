import { FETCH_PRODUCTS, SHOPPING_CART } from "./types";
import axios from "axios";

export const getAllProducts = () => (dispatch) => {
  axios.get("https://fakestoreapi.com/products").then((res) =>
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data,
    })
  );
};

export const getCartList = (cartlist) => (dispatch) => {
  dispatch({
    type: SHOPPING_CART,
    payload: cartlist,
  });
};
