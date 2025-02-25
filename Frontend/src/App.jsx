import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./utils/navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./utils/footer/Footer";
import Productpage from "./pages/Productpage/Productpage";
import Dashboard from "./pages/Admin/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/admin" element={<Dashboard/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
