import React from "react";
import "./Productpage.css";
import PlusGrid from "../../utils/svg/PlusGrid";
import Dot from "../../utils/svg/Dot";

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

const Productpage = () => {
  return (
    <div className="productpage-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="center">Latest Products</h2>
        <hr />
        <ul>
          {products.map((product, i) => (
            <li key={product.id}>
              <img src={product.image+i} alt={product.title} />
              <span>{product.title}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Banner */}
        <div className="banner relative">
            <h1>Our Products</h1>
        </div>

        {/* Product Grid */}
        <section className="product-grid">
          {products.map((product, i) => (
            <div key={product.id} className="product-card">
              <img src={product.image+i} alt={product.title} />
              <div className="product-card-details">
                <h3>{product.title}</h3>
                <button className="primary">Get Product</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Productpage;
