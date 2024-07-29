import React from "react";
import Hero from "../components/Hero";


import Products from "../components/Product";
import ProductRange from "../components/ProductRange";

function Home() {
  return (
    <div>
      <Hero />
      <ProductRange />
      <Products />
    </div>
  );
}

export default Home;
