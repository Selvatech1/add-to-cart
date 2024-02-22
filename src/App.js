import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Cart from "./Cart";
import Footer from "./Footer";
import Header from "./Header";

import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Home />
        <Cart />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
