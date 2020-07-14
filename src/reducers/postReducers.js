import { FETCH_PRODUCTS, SHOPPING_CART, AMOUNT, USERS } from "../actions/types";

const initialState = {
  allItems: [],
  cart: [],
  amount: 3,
  users: [
    { title: "yerok", id: 1, price: 3000000 },
    { title: "jenny", id: 2, price: 2000 },
  ],
};

export default function (state = initialState, action) {
  console.log(action.payload);

  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        allItems: action.payload,
      };

    case SHOPPING_CART: {
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };
    }
    case AMOUNT: {
      return {
        ...state,
        amount: state.amount,
      };
    }
    case USERS: {
      return {
        ...state,
        users: state.users,
      };
    }

    default:
      return state;
  }
}
