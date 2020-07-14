import React from "react";

import "./App.css";
import ProductLayout from "./components/views/Product/ProductLayout";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/views/Navbar/Header";

function App() {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ProductLayout />
      </div>
    </Provider>
  );
}

export default App;
