import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./utils/navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Footer from "./utils/footer/Footer";
import Productpage from "./pages/Productpage/Productpage";
import Dashboard from "./pages/Admin/Dashboard";
import Loginpage from "./pages/Login/LoginPage";
import PrivateRoute from "./utils/private/PrivateRoute";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />
          <Route path="/admin" element={<PrivateRoute role="admin" />}>
            <Route path="" element={<Dashboard />} />
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
