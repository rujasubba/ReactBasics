import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
