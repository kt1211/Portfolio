import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './Components/Home';
import Login from "./Components/Login";
import Register from "./Components/Register";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Eligibility from "./Components/Eli";
import GuidelinesForAdoption from "./Components/Guid";
import DocumentsRequired from "./Components/Doc";
import SearchAdoptionAgency from "./Components/Map";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Eli" element={<Eligibility />} />
          <Route path="/Guid" element={<GuidelinesForAdoption />} />
          <Route path="/Doc" element={<DocumentsRequired />} />
          <Route path="/Map" element={<SearchAdoptionAgency />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
