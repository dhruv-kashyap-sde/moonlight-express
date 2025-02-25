import React from "react";
import "./Dashboard.css";

const products = [
  {
    id: 1,
    title: "Shiny Gold Bamboo Flatware Set",
    image: "https://loremflickr.com/200/200?random=3",
  },
  {
    id: 2,
    title: "Brushed Gold Flatware Set With White Enamel Handle",
    image: "https://loremflickr.com/200/200?random=3",
  },
  {
    id: 3,
    title: "Shiny Silver Flatware With Twisted Wire Handle",
    image: "https://loremflickr.com/200/200?random=3",
  },
  {
    id: 4,
    title: "Shiny Silver Flatware With Textured Handle",
    image: "https://loremflickr.com/200/200?random=3",
  },
  {
    id: 5,
    title: "Brushed Black Flatware With Hand Forged Tapered Handle",
    image: "https://loremflickr.com/200/200?random=3",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-container">
        <div className="logo-container">
          <h1 className="color">Admin</h1>
        </div>
        <hr className="yellow" />
        <div className="sidebar-buttons">
          <button className="secondary">All Products</button>
          <button className="secondary">Inquiries</button>
        </div>
      </div>
      <div className="dashboard-body">
        <h1 className="color">All Products</h1>
        <hr />
        <header className="header-buttons">
          <button className="secondary">Edit</button>
          <button className="secondary">Delete</button>
          <button className="secondary">Create</button>
        </header>
        <section className="product-grid">
          {products.map((product, i) => (
            <div key={product.id} className="product-card">
              <img src={product.image + i} alt={product.title} />
              <div className="product-card-details">
                <h3>{product.title}</h3>
                <button className="primary">Get Product</button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
