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

const categories = [
  {name:"Metal"},
  {name:"Glass"},
  {name:"Resin"},
  {name:"Wooden"},
  {name:"Home-Decor"},
  {name:"Electric"},
]

const Productpage = () => {
  return (
    <div className="productpage-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <p className="center">Filters</p>
        <hr />
        <ul>
          {categories.map((category, i) => (
            <li className="secondary" key={i}>
              {category.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Banner */}
        <div className="banner relative">
            <h1 className="center">Our Products</h1>
        </div>

        {/* Product Grid */}
        <section className="product-grid">
          {products.map((product, i) => (
            <div key={product.id} className="product-card">
            <img src={product.image + i} alt={product.title} />
            <div className="product-card-details">
              <h3 className='product-title'>{product.title}</h3>
              <div className="price-category">
                <h4 className='fw-500'>₹999</h4>
                <h4 className='fw-500'>Gold</h4>
              </div>
              {/* <p className='product-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eaque consequatur cupiditate fugiat libero ad, maiores hic ullam molestias voluptatem quae voluptatibus dignissimos, iure perferendis?</p> */}
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
