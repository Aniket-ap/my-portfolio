import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
