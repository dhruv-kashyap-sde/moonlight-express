import React, { useState } from "react";
import "./Dashboard.css";
import AllProducts from "./AllProducts";
import Categories from "./Categories";
import Inquiries from "./Inquiries";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("AllProducts");

  const renderComponent = () => {
    switch (activeComponent) {
      case "AllProducts":
        return <AllProducts />;
      case "Categories":
        return <Categories />;
      case "Inquiries":
        return <Inquiries />;
      default:
        return <AllProducts />;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <div className="logo-container">
          <h1 className="color">Admin</h1>
        </div>
        <hr className="yellow" />
        <div className="sidebar-buttons">
          <button className="secondary" onClick={() => setActiveComponent("AllProducts")}>All Products</button>
          <button className="secondary" onClick={() => setActiveComponent("Inquiries")}>Inquiries</button>
          <button className="secondary" onClick={() => setActiveComponent("Categories")}>Categories</button>
        </div>
      </div>
      <>
        {renderComponent()}
      </>
    </div>
  );
};

export default Dashboard;
