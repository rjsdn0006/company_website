import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Footer />
    </BrowserRouter>
  );
};

export default App;
