import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { ProductContext } from "../../context/ProductContext";

// const initialProducts = [
//   {
//     id: 1,
//     title: "Shiny Gold Bamboo Flatware Set",
//     image: "https://loremflickr.com/200/200?random=3",
//     description: "A beautiful set of flatware.",
//     price: 999,
//     category: "Gold",
//   },
//   {
//     id: 2,
//     title: "Brushed Gold Flatware Set With White Enamel Handle",
//     image: "https://loremflickr.com/200/200?random=3",
//     description: "Elegant flatware with white enamel handle.",
//     price: 999,
//     category: "Gold",
//   },
//   {
//     id: 3,
//     title: "Brushed Gold Flatware Set With White Enamel Handle",
//     image: "https://loremflickr.com/200/200?random=3",
//     description: "Elegant flatware with white enamel handle.",
//     price: 999,
//     category: "Gold",
//   },
//   {
//     id: 4,
//     title: "Brushed Gold Flatware Set With White Enamel Handle",
//     image: "https://loremflickr.com/200/200?random=3",
//     description: "Elegant flatware with white enamel handle.",
//     price: 999,
//     category: "Gold",
//   },
//   {
//     id: 5,
//     title: "Brushed Gold Flatware Set With White Enamel Handle",
//     image: "https://loremflickr.com/200/200?random=3",
//     description: "Elegant flatware with white enamel handle.",
//     price: 999,
//     category: "Gold",
//   },
//   {
//     id: 6,
//     title: "Brushed Gold Flatware Set With White Enamel Handle",
//     image: "https://loremflickr.com/200/200?random=3",
//     description: "Elegant flatware with white enamel handle.",
//     price: 999,
//     category: "Gold",
//   },
//   // Add more products as needed
// ];

const AllProducts = () => {
  const { categories, allProducts, setAllProducts, setCategories } =
    useContext(ProductContext);
  const URL = import.meta.env.VITE_API_URL;

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [updating, setUpdating] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    images: [],
  });

  const handleEdit = (product) => {
    console.log(product);
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category._id,
      images: product.images,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const openDeletePopup = (productId) => {
    console.log(productId);
    
    setConfirmDelete(true);
    setDeletingProduct(productId);
  };

  const handleDelete = async (productId) => {
    console.log(productId);
    
    try {
      await axios.delete(`${URL}/products/${productId}`);
      setAllProducts(
        allProducts.filter((product) => product._id !== productId)
      );
      setConfirmDelete(false);
      setDeletingProduct(null);
      toast.success("Products deleted successfully");
    } catch (error) {
      console.error("Error deleting products", error);
      toast.error("Error deleting products");
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price || !formData.category || formData.images.length === 0) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      setUpdating(true);
      const response = await axios.put(
        `${URL}/products/${selectedProduct._id}`,
        formData
      );
      console.log("Product updated:", response.data);
      toast.success("Product updated successfully");
      setSelectedProduct(null);
      // Optionally refresh the product list or notify the user
    } catch (error) {
      console.error("Error updating product", error);
      toast.error("Error updating product");
    } finally {
      setUpdating(false);
      let response = await axios.get(`${URL}/get-all-products`);
      setAllProducts(response.data);
    }
  };

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
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
        toast.error(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchProductsAndCategories();
  }, []);


  return (
    <div className="dashboard-body">
      <h1 className="color">All Products</h1>
      <hr />
      <section className="product-grid">
        {allProducts.map((product, i) => (
          <div key={product._id} className="product-card">
            <img src={product.images[0]} alt={product.name} />
            <div className="product-card-details">
              <h3 className="product-title">{product.name}</h3>
              <div className="price-category">
                <h4 className="fw-500">₹{product.price}</h4>
                <h4 className="fw-500">{product.category.name}</h4>
              </div>
              {/* <p className='product-description'>{product.description}</p> */}
              <div className="button-container mt-10">
                <button className="primary" onClick={() => handleEdit(product)}>
                  Edit
                </button>
                <button
                  style={{ width: "30%" }}
                  className="secondary"
                  onClick={() => openDeletePopup(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* edit product */}
      {selectedProduct && (
        <div className="modal blur">
          <form onSubmit={handleSave} className="modal-content">
            <h2>Edit Product</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Product Title"
            />
            <textarea
              value={formData.description}
              onChange={handleInputChange}
              name="description"
              required
              placeholder="Product Description"
              className="editable-input"
            />
            <input
              type="number"
              value={formData.price}
              name="price"
              onChange={handleInputChange}
              required
              placeholder="Product Price"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button className="primary" disabled={updating} type="submit">
              {updating ? "Updating..." : "Update Product"}
            </button>
            <button
              className="secondary"
              onClick={() => setSelectedProduct(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* confirm Delete */}
      {confirmDelete && (
        <div className="modal">
          <div className="modal-content">
            <h1>Confirm Deleting the product?</h1>
            <button
              onClick={() => handleDelete(deletingProduct)}
              className="primary"
            >
              Yes
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              className="secondary"
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
