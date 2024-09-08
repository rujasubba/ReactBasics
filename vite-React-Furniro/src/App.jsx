import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripeLoad = loadStripe("pk_test_51Pu8FnFz6ADdRgO2Z7RYd4clC5O1lMMevo0QkSvVbSyCzwavshmh9CsG9t10Q6Xihcife2ffy1VqLZYZSbqHu3fi00JyvXAhsS");

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route 
           path="/cart" 
           element={
             <Elements stripe={stripeLoad}>
                 <Cart />

              </Elements>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
