import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./utils/navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./utils/footer/Footer";
import Productpage from "./pages/Productpage/Productpage";
import Dashboard from "./pages/Admin/Dashboard";
import Loginpage from "./pages/Login/LoginPage";
import { Toaster } from "react-hot-toast";
import SingleProduct from "./pages/Productpage/SingleProduct";
import Private from "./utils/private/Private";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path='/products/:id' element={<SingleProduct/>} />
          <Route path="/admin" element={<Private />} >
            <Route path="" element={<Dashboard/>} />
          </Route>
          <Route path="/login" element={<Loginpage />} />
        </Routes>
        <Footer />
        <Toaster/>
      </Router>
    </>
  );
};

export default App;
