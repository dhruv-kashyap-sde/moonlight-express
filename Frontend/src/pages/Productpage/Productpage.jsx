import React, { useContext, useEffect, useState } from "react";
import "./Productpage.css";
import PlusGrid from "../../utils/svg/PlusGrid";
import Dot from "../../utils/svg/Dot";
import { ProductContext } from "../../context/ProductContext";
import axios from "axios";
import toast from "react-hot-toast";
import PaginationButtons from "../../utils/PaginationButtons";
import ProductCard from "./ProductCard";

// const products = [
//   {
//     id: 1,
//     title: "Shiny Gold Bamboo Flatware Set",
//     image: "https://loremflickr.com/200/200?random=3",
//   },
//   {
//     id: 2,
//     title: "Brushed Gold Flatware Set With White Enamel Handle",
//     image: "https://loremflickr.com/200/200?random=3",
//   },
//   {
//     id: 3,
//     title: "Shiny Silver Flatware With Twisted Wire Handle",
//     image: "https://loremflickr.com/200/200?random=3",
//   },
//   {
//     id: 4,
//     title: "Shiny Silver Flatware With Textured Handle",
//     image: "https://loremflickr.com/200/200?random=3",
//   },
//   {
//     id: 5,
//     title: "Brushed Black Flatware With Hand Forged Tapered Handle",
//     image: "https://loremflickr.com/200/200?random=3",
//   },
// ];

const categories = [
  {name:"Metal"},
  {name:"Glass"},
  {name:"Resin"},
  {name:"Wooden"},
  {name:"Home-Decor"},
  {name:"Electric"},
]

const Productpage = () => {

  const URL = import.meta.env.VITE_API_URL;
  const { allProducts, setAllProducts, categories, setCategories } =
    useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        setLoading(true);
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get(`${URL}/get-all-products`),
          // axios.get(`${URL}/categories`),
        ]);
        setAllProducts(productsResponse.data);
        console.log(productsResponse.data);
        
        // setCategories(categoriesResponse.data);
        // setFilteredProducts(productsResponse.data); // Initialize filtered products
      } catch (error) {
        console.error("Error fetching data", error);
        toast.error(`Error fetching data${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProductsAndCategories();
  }, []);

  // const handleCategoryClick = (category) => {
  //   setActiveCategory(category);
  //   const filtered = allProducts.filter(
  //     (product) => product.category.name === category.name
  //   );
  //   setFilteredProducts(filtered.length > 0 ? filtered : []);
  // };

  // const defaultSorting = () => {
  //   setFilteredProducts(allProducts);
  //   setActiveCategory(null);
  // };
  // Pagination logic...
  const [currentPage, setCurrentPage] = useState(1)
  const [productPerPage, setProductPerPage] = useState(9);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

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
          {allProducts.map((product, i) => (
            <ProductCard product={product} />
          ))}
        </section>
        {/* <PaginationButtons totalProducts={filteredProducts.length} productPerPage={productPerPage} currentPage={currentPage} onPageChange={setCurrentPage}/> */}
      </main>
    </div>
  );
};

export default Productpage;
