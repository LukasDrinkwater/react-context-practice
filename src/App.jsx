import { useState } from "react";

import { createContext } from "react";

import "./App.css";
import "../src/styles/reset.css";


// step 1 create the initial context, this will be the default value of the context
const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});



const App = () => {
  const [cartItems, setCartItems] = useState([
    /* List of Items in Cart */
  ]);
  const products = /* some custom hook that fetches products and returns the fetched products */

  const addToCart = () => {
    // add to cart logic (this adds to cartItems)
  };

  return (
    /* We are going to pass the things that we want to inject to these
     components using the value prop */
    /* This value prop will overwrite the default value */
    <ShopContext.Provider value={{cartItems, products, addToCart}}>
      <Header />
      <ProductDetail />
    </ShopContext.Provider>
  );
}

export default App;
