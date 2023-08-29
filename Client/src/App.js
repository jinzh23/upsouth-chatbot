import React from 'react';
// import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { StyleSheetManager } from "styled-components";
import Navbar from  "./Components/Navbar";

function App() {
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" />
          <Route path="/sponsors" />
          <Route path="/contact" />
          <Route path="/login" />
        </Routes>
      </Router>
    </StyleSheetManager>
  );
}

export default App;
