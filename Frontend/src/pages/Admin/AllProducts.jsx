import React, { useState } from "react";
import toast from "react-hot-toast";

const initialProducts = [
  {
    id: 1,
    title: "Shiny Gold Bamboo Flatware Set",
    image: "https://loremflickr.com/200/200?random=3",
    description: "A beautiful set of flatware.",
    price: 999,
    category: "Gold",
  },
  {
    id: 2,
    title: "Brushed Gold Flatware Set With White Enamel Handle",
    image: "https://loremflickr.com/200/200?random=3",
    description: "Elegant flatware with white enamel handle.",
    price: 999,
    category: "Gold",
  },
  {
    id: 3,
    title: "Brushed Gold Flatware Set With White Enamel Handle",
    image: "https://loremflickr.com/200/200?random=3",
    description: "Elegant flatware with white enamel handle.",
    price: 999,
    category: "Gold",
  },
  {
    id: 4,
    title: "Brushed Gold Flatware Set With White Enamel Handle",
    image: "https://loremflickr.com/200/200?random=3",
    description: "Elegant flatware with white enamel handle.",
    price: 999,
    category: "Gold",
  },
  {
    id: 5,
    title: "Brushed Gold Flatware Set With White Enamel Handle",
    image: "https://loremflickr.com/200/200?random=3",
    description: "Elegant flatware with white enamel handle.",
    price: 999,
    category: "Gold",
  },
  {
    id: 6,
    title: "Brushed Gold Flatware Set With White Enamel Handle",
    image: "https://loremflickr.com/200/200?random=3",
    description: "Elegant flatware with white enamel handle.",
    price: 999,
    category: "Gold",
  },
  // Add more products as needed
];

const AllProducts = () => {
  const [products, setProducts] = useState(initialProducts);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCategory, setNewProductCategory] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setNewProductTitle(product.title);
    setNewProductDescription(product.description);
    setNewProductPrice(product.price);
    setNewProductCategory(product.category);
  };

  const openDeletePopup = (productId) => {
    setConfirmDelete(true);
    setDeletingProduct(productId);
  }

  const handleDelete = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
    setConfirmDelete(false);
    setDeletingProduct(null)
  };

  const handleSave = () => {
    setProducts(products.map(product => 
      product.id === editingProduct.id ? { 
        ...product, 
        title: newProductTitle, 
        description: newProductDescription,
        price: newProductPrice,
        category: newProductCategory
      } : product
    ));
    setEditingProduct(null);
    setNewProductTitle("");
    setNewProductDescription("");
    setNewProductPrice("");
    setNewProductCategory("");
    toast.success("Added Successfully");
  };

  return (
    <div className="dashboard-body">
      <h1 className="color">All Products</h1>
      <hr />
      <section className="product-grid">
        {products.map((product, i) => (
          <div key={product.id} className="product-card">
            <img src={product.image + i} alt={product.title} />
            <div className="product-card-details">
              <h3 className="product-title">{product.title}</h3>
              <div className="price-category">
                <h4 className="fw-500">₹{product.price}</h4>
                <h4 className="fw-500">{product.category}</h4>
              </div>
              <p className="product-description">
                {product.description}
              </p>
              <div className="button-container mt-10">
                <button className="primary" onClick={() => handleEdit(product)}>Edit</button>
                <button style={{ width: "30%" }} className="secondary" onClick={() => openDeletePopup(product.id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </section>
      
      {/* edit product */}
      {editingProduct && (
        <div className="modal">
          <form onSubmit={handleSave} className="modal-content">
            <h2>Edit Product</h2>
            <input 
              type="text" 
              value={newProductTitle} 
              onChange={(e) => setNewProductTitle(e.target.value)} 
              placeholder="Product Title" 
            />
            <textarea 
              value={newProductDescription} 
              onChange={(e) => setNewProductDescription(e.target.value)} 
              placeholder="Product Description" 
            />
            <input 
              type="number" 
              value={newProductPrice} 
              onChange={(e) => setNewProductPrice(e.target.value)} 
              placeholder="Product Price" 
            />
            <input 
              type="text" 
              value={newProductCategory} 
              onChange={(e) => setNewProductCategory(e.target.value)} 
              placeholder="Product Category" 
            />
            <button className="primary" type="submit">Save</button>
            <button className="secondary" onClick={() => setEditingProduct(null)}>Cancel</button>
          </form>
        </div>
      )}

      {/* confirm Delete */}
      {
        confirmDelete && (
          <div className="modal">
            <div className="modal-content">
              <h1>Confirm Deleting the product?</h1>
              <button onClick={() => handleDelete(deletingProduct)} className="primary">Yes</button>
              <button onClick={() => setConfirmDelete(false)} className="secondary">No</button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default AllProducts;
