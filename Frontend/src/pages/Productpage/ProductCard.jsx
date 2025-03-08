import React, { useState } from "react";
import QuotationPopup from "../../utils/popups/QuotationPopup";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div key={product._id} className="product-card">
          <img onClick={() => navigate(`/products/${product._id}`)} src={product.images[0]} alt={product.name} />
        <div className="product-card-details">
        <Link to={`/products/${product._id}`}>
          <h3 className="product-title">{product.name}</h3>
          </Link>
          <div className="price-category">
            <h4 className="fw-500">₹{product.price}</h4>
            <h4 className="fw-500">{product.category.name}</h4>
          </div>
          {/* <p className='product-description'>{product.description}</p> */}
          <button onClick={() => setPopupVisible(true)} className="primary">
            Get Product
          </button>
        </div>
      </div>
      {isPopupVisible && (
        <QuotationPopup
          product={product}
          onClose={() => setPopupVisible(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
