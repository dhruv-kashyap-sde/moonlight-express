import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";
import axios from "axios";
import QuotationPopup from "../../utils/popups/QuotationPopup";
import Dot from "../../utils/svg/Dot";
import PlusGrid from "../../utils/svg/PlusGrid";

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
      <div className="product-page-header color relative">
        <Dot left={"-10px"} />
        <h1 className="product-name fw-400 color">{product.name}</h1>
      </div>
      <hr />
      <div className="product-page">
        <div className="product-left">
          <img
            src={`${product.images[0]}`}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="product-right relative">
          <h2>₹ {product.price}</h2>
          <h2 className="product-category">Category: {product.category.name}</h2>
          <p className="product-description italic-text">
            {product.description}
          </p>
          <button className="primary" onClick={handleOpenPopup}>
            Get Quotation <i class="ri-mail-line"></i>
          </button>
          <PlusGrid right={"0"} top={"0"} />
        </div>
      </div>
      {isPopupVisible && (
        <QuotationPopup product={product} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default SingleProduct;
