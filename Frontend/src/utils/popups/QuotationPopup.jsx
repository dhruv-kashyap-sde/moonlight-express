import React, { useState } from "react";
import "./QuotationPopup.css";
import axios from "axios";
import toast from "react-hot-toast";

const QuotationPopup = ({ product, onClose }) => {
  const URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    date: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    product: product._id
  });

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in 'YYYY-MM-DD' format
    const updatedFormData = { ...formData, date: currentDate, };
    console.log(updatedFormData);
    
    try {
      let response = await axios.post(`${URL}/add-inquiry`,
        updatedFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        });

      console.log(response.data);
      toast.success("Your inquiry has been submitted successfully!");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="popup-overlay blur">
      <div className="popup-container ">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup-title">{product.name}{` (₹${product.price})`}</h2>
        <hr />

        <div className="popup-content">
          <div className="image-container">
            <img
              src={product.images[0]} // Replace with your image path
              alt={product.name}
            />
          </div>
          <div className="form-container">
            <p className="product-description">{product.description}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                maxLength={10}
                name="phone"
                pattern="[0-9]{10}"
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea
                maxLength={500}
                name="message"
                placeholder="Enter Message regarding the product"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="primary">
                Send A Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationPopup;
