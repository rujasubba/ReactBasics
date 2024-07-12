import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
