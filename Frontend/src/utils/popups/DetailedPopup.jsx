import React from "react";
import "./DetailedPopup.css";
import axios from "axios";
import toast from "react-hot-toast";

const DetailedPopup = ({ inquiry, close }) => {
  const product = inquiry.product || {}; // Fallback to an empty object if product is null

  const handleInquiryDelete = async (id) => {
    console.log(id);
    
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/delete-inquiry/`, { id }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      close(); // Close the popup after deletion
      toast.success("Inquiry deleted successfully");
    } catch (error) {
      console.error("Error deleting inquiry", error);
    }
  }

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
          <div className="basic-button">
            <button className="primary" onClick={close}>Close</button>
            <button onClick={() => handleInquiryDelete(inquiry._id)} className="delete"><i className="ri-delete-bin-6-line"></i></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedPopup;
