import React, { useContext, useEffect, useState } from "react";
import "./Productpage.css";
import { ProductContext } from "../../context/ProductContext";
import axios from "axios";
import toast from "react-hot-toast";
import PaginationButtons from "../../utils/PaginationButtons";
import ProductCard from "./ProductCard";
import Loaders from "../../utils/Loader/Loaders";

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
          axios.get(`${URL}/categories`),
        ]);
        setAllProducts(productsResponse.data);
        console.log(productsResponse.data);
        setCategories(categoriesResponse.data);
        setFilteredProducts(productsResponse.data); // Initialize filtered products
      } catch (error) {
        console.error("Error fetching data", error);
        toast.error(`Error fetching data${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProductsAndCategories();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const filtered = allProducts.filter(
      (product) => product.category.name === category.name
    );
    setFilteredProducts(filtered.length > 0 ? filtered : []);
  };

  const defaultSorting = () => {
    setFilteredProducts(allProducts);
    setActiveCategory(null);
  };
  // Pagination logic...
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="productpage-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <p className="center">Filters</p>
        <hr />
        <ul>
          <li className="secondary" onClick={defaultSorting}>All Products</li>
          {!loading ? (
            categories.length !== 0 ? (
              categories.map((category, i) => (
                <li onClick={() => handleCategoryClick(category)} className={`${activeCategory === category ? "primary" : "secondary"} `} key={i}>
                  {category.name}
                </li>
              ))
            ) : (
              <p>No categories Available</p>
            )
          ) : (
            <Loaders />
          )}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Banner */}
        <div className="banner relative">
          <h1 className="center">Our Products </h1>
        </div>
          <div className="sorting-filter">
          <select onChange={(e) => {
            const selectedCategory = categories.find(category => category.name === e.target.value);
            selectedCategory ? handleCategoryClick(selectedCategory) : defaultSorting();
          }}>
          <option className="secondary" value="">Sort by All Products</option>
          {!loading ? (
            categories.length !== 0 ? (
              categories.map((category, i) => (
                <option value={category.name} className={`${activeCategory === category ? "primary" : "secondary"} `} key={i}>
                  Sort by {category.name}
                </option>
              ))
            ) : (
              <p>No categories Available</p>
            )
          ) : (
            <Loaders />
          )}
        </select>
          </div>
        {/* Product Grid */}
        <section className="product-grid">
        {!loading ? (
              filteredProducts.length > 0 ? (
                currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No products in this category</p>
              )
            ) : (
              <Loaders />
            )}
        </section>
        <PaginationButtons totalProducts={filteredProducts.length} productPerPage={productPerPage} currentPage={currentPage} onPageChange={setCurrentPage}/>
      </main>
    </div>
  );
};

export default Productpage;
