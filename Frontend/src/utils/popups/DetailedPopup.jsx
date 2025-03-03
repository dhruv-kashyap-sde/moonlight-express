import React from "react";
import "./DetailedPopup.css";

const DetailedPopup = ({ inquiry, close }) => {
  const product = inquiry.product || {}; // Fallback to an empty object if product is null

  return (
    <>
      <div className="detailed-popup-overlay blur">
        <div className="detailed-popup-container">
          <h1>Details</h1>
          <hr />
          <div className="product-section">
            <div className="product-image">
              <img src={product.images?.[0] || "[deleted]"} alt={product.name || "[deleted]"} />
            </div>
            <div className="product-details">
              <h3 className="italic-text">
                {product.name || "[deleted]"} <span>${product.price || "[deleted]"}</span>
              </h3>
              <p className="secondary-text italic-text">Category: {product.category?.name || "[deleted]"}</p>
              <p className="italic-text secondary-text">Product ID: {product._id || "[deleted]"}</p>
              <p className="client-message italic-text">{product.description || "[deleted]"}</p>
            </div>
          </div>
          <hr className="divider"></hr>
          <div className="client-section">
            <div className="client-header">
              <h3>
                {inquiry.name} <span className="client-date">{inquiry.date}</span>
              </h3>
            </div>
            <p className="client-email italic-text">{inquiry.email}</p>
            <p className="client-phone italic-text">{inquiry.phone}</p>
            <p className="client-message italic-text">{inquiry.message}</p>
          </div>
          <button className="basic-button primary" onClick={close}>Close</button>
        </div>
      </div>
    </>
  );
};

export default DetailedPopup;
