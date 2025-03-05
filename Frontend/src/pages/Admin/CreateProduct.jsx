import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const URL = import.meta.env.VITE_API_URL;
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    categoryID: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCategories = async () => {
      try {
        let response = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories`
        );
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(`Error fetching Categories: ${error}`);
      }
    };

    getCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("categoryID", product.categoryID);

    // Only append image if a new one is selected
    if (selectedImage) {
      formData.append("image", selectedImage);
    }
    try {
      setLoading(true);
      const response = await axios.post(`${URL}/add-products`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
      toast.success("Product added successfully", {
        duration: 3000,
      });
      setProduct({
        name: "",
        description: "",
        price: "",
        categoryID: "",
        image: null,
      });
    } catch (error) {
      console.error("Error adding product", error);
      toast.error("Error adding product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="dashboard-body create-product-container">
        <h1 className="color">Create Product</h1>
        <hr />
        <div className="product-details">
          <form onSubmit={handleSubmit} className="product-form">
            <p>
              <span className="italic-text">Product Image</span>
              <input
                required
                type="file"
                name="image"
                onChange={handleImageChange}
                className="italic-text"
              />
            </p>
            <input
              required
              type="text"
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              className="italic-text"
            />
            <textarea
              name="description"
              placeholder="Product Description"
              value={product.description}
              onChange={handleChange}
              className="italic-text"
            ></textarea>
            <input
              required
              type="number"
              name="price"
              min={0}
              placeholder="Product Price"
              value={product.price}
              onChange={handleChange}
              className="italic-text"
            />
            <select
              name="categoryID"
              value={product.categoryID}
              onChange={handleChange}
              className="italic-text"
              required
            >
              <option className="italic-text" defaultChecked value="">
                Select Category
              </option>
              {categories.map((category, index) => (
                <option
                  className="italic-text"
                  key={index}
                  value={category._id}
                >
                  {category.name}
                </option>
              ))}
            </select>
            <button className="primary" disabled={loading} type="submit">
              {loading ? "Adding Product..." : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
