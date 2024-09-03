import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Ensure Home component is imported
import Singpro from "./pages/Singpro";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Singpro />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
