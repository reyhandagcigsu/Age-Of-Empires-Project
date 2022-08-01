import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Units from "./components/Units";
import UnitDetail from './components/UnitDetail';
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Units" element={<Units />} />
          <Route exact path="/UnitDetail/:id" element={<UnitDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
