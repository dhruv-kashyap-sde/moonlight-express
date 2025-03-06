import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import AllProducts from "./AllProducts";
import Categories from "./Categories";
import Inquiries from "./Inquiries";
import CreateProduct from "./CreateProduct";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("AllProducts");

  const navigate = useNavigate();

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

  const logoutAdmin = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logout successful");
  }
  
  return (
    <div className="dashboard-container">
      <div className="sidebar-container relative">
        <div className="logo-container">
          <h1 className="color">Admin</h1>
        </div>
        <hr className="yellow" />
        <div className="sidebar-buttons">
          <button className={`${activeComponent == "AllProducts" && 'active' } secondary`} onClick={() => setActiveComponent("AllProducts")}>All Products</button>
          <button className={`${activeComponent == "Create" && 'active' } secondary`} onClick={() => setActiveComponent("Create")}>Create Product</button>
          <button className={`${activeComponent == "Inquiries" && 'active' } secondary`} onClick={() => setActiveComponent("Inquiries")}>Inquiries</button>
          <button className={`${activeComponent == "Categories" && 'active' } secondary`} onClick={() => setActiveComponent("Categories")}>Categories</button>
        </div>
        <div className="logout-button absolute">
          <button onClick={logoutAdmin} className="secondary" >Logout</button>
        </div>
      </div>
      <>
        {renderComponent()}
      </>
    </div>
  );
};

export default Dashboard;
