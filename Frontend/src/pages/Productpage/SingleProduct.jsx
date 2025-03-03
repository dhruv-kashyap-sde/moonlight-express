import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import axios from "axios";
import QuotationPopup from "../../../utils/Popups/QuotationPopup";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const URL = import.meta.env.VITE_API_URL;

  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  const handleOpenPopup = () => {
    setPopupVisible(true);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${URL}/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }
  

  return (
    <>
      <div className="curved-banner scroll-container">OUR PRODUCTS</div>
        <div className="product-page">
            <div className="product-left">
                <img
                    src={`${product.images[0]}`} 
                    alt={product.name}
                    className="product-image"
                />
            </div>
            <div className="product-right">
                <h1 className="product-name">
                    {product.name}
                </h1>
                <hr />
                <h2>$ {product.price}</h2>
                <h2 className="product-category">Category: Home Decor</h2>
                <p className="product-description italic-text">
                    {product.description}
                </p>
                <button className="basic-button" onClick={handleOpenPopup}>
                    Get Quotation <i class="ri-mail-line"></i>
                </button>
            </div>
        </div>
        {isPopupVisible && <QuotationPopup product={product} onClose={handleClosePopup} />}
    </>
  );
};

export default SingleProduct;
