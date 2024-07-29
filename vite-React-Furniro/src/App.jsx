import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import SingleItem from "./components/SingleProduct/singleItem";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
