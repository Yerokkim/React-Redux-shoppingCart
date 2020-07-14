//initial store

const { createStore } = require("redux");

const initialStore = {
  count: 0,
  name: "John",
};
//reducer
//이거를 원래 action.js파일에
export const DECREASE = "DECREASE";
export const INCREASE = "INDECREASE";
export const CHANGE_NAME = "CHANGE_NAME";
export const RESET = "RESET";

function reducer(state, action) {
  console.log({ state, action });

  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1 };
  }
  if (action.type === RESET) {
    return { ...state, count: 0 };
  }
  if (action.type === CHANGE_NAME) {
    return { ...state, name: "bobo" };
  }
  return state;
}

const store = createStore(reducer, initialStore);
store.dispatch({ type: DECREASE });
store.dispatch({ type: INCREASE });
store.dispatch({ type: CHANGE_NAME });
