import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/layout/hero.scss"
import "./styles/layout/header.scss"

import Name from "./components/Name";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Address } from "./components/Name";
function App (){
return(
  <React.Fragment>
    <Routes>
      {/* <Route path="/" element={<Name />} /> */}
      <Route path="/Header" element={<Header />} />
      <Route path="/Name" element={<Name />} />
      <Route path="/Hero" element={<Hero />} />
      
    </Routes>
  </React.Fragment>
)
}
export default App;
