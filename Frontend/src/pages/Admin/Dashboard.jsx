import React, { useState } from "react";
import "./Dashboard.css";
import AllProducts from "./AllProducts";
import Categories from "./Categories";
import Inquiries from "./Inquiries";
import CreateProduct from "./CreateProduct";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("AllProducts");
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_API_URL;

  const renderComponent = () => {
    switch (activeComponent) {
      case "AllProducts":
        return <AllProducts />;
      case "Create":
        return <CreateProduct />;
      case "Categories":
        return <Categories />;
      case "Inquiries":
        return <Inquiries />;
      default:
        return <AllProducts />;
    }
  };

  const logoutAdmin = async () => {
    try {
      // Call the logout endpoint to clear the cookie
      await axios.post(`${URL}/admin/logout`, {}, {
        withCredentials: true
      });
      
      navigate("/");
      toast.success("Logout successful");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed, please try again");
    }
  }
  
  return (
    <div className="dashboard-container">
      <div className="sidebar-container relative">
        <div className="logo-container">
          <h1 className="color">Admin</h1>
        </div>
        <hr className="yellow" />
        <div className="sidebar-buttons">
          <button className={`${activeComponent == "AllProducts" && 'active' } secondary`} onClick={() => setActiveComponent("AllProducts")}><i class="ri-instance-fill"></i> All Products</button>
          <button className={`${activeComponent == "Create" && 'active' } secondary`} onClick={() => setActiveComponent("Create")}><i class="ri-sticky-note-add-fill"></i> Create Product</button>
          <button className={`${activeComponent == "Inquiries" && 'active' } secondary`} onClick={() => setActiveComponent("Inquiries")}><i class="ri-chat-3-fill"></i> Inquiries</button>
          <button className={`${activeComponent == "Categories" && 'active' } secondary`} onClick={() => setActiveComponent("Categories")}><i class="ri-book-shelf-line"></i> Categories</button>
          <button onClick={logoutAdmin} className="secondary"><i class="ri-logout-box-line"></i> Logout</button>
        </div>
      </div>
      <>
        {renderComponent()}
      </>
    </div>
  );
};

export default Dashboard;
