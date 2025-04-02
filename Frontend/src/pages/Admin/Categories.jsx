import axios from "axios";
import React, { useEffect, useState } from "react";
import Loaders from "../../utils/Loader/Loaders";
import toast from "react-hot-toast";

const Categories = () => {

  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [creatingCategories, setCreatingCategories] = useState(false);
  const getCategories = async () => {
    try {
      setLoadingCategories(true);
      let response = await axios.get(
        `${import.meta.env.VITE_API_URL}/categories`
      );
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(`Error fetching Categories: ${error}`);
    } finally {
      setLoadingCategories(false);
    }
  };

  const getRealDate = (inputDate) => {
    const date = new Date(inputDate);

    // Extract hours, minutes, and format them into AM/PM
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format, 0 becomes 12

    // Extract day, month, and year
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
    const year = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year

    // Return the formatted date
    return `${hours}:${minutes} ${ampm} ${day}-${month}-${year}`;
  };

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  const createCategories = async (e) => {
    e.preventDefault();
    const category = { name: categoryName };
    if (!categoryName.trim()) {
      toast.error("Category name is required");
      return;
    }
    try {
      setCreatingCategories(true);
      let response = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-category`,
        category,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setCategoryName("");
      getCategories();
      toast.success("Category created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Error creating category");
    } finally {
      setCreatingCategories(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryDelete = async (id) => {
    console.log(id);
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/delete-category/`,
        {id},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setCategories((prevInquiries) => prevInquiries.filter((inquiry) => inquiry._id !== id));
      toast.success("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category", error);
      toast.error("Error deleting category");
    }
  }

  return (
    <div className="dashboard-body">
      <h1 className="color">Categories</h1>
      <hr />
      <>
        <div className="categories-container">
          <div className="category-body">
            <form onSubmit={createCategories} className="create-category">
              <h3 className="fw-300">Create a Category</h3>
              <input
                value={categoryName}
                onChange={handleInputChange}
                name="categoryName"
                type="text"
                placeholder="Category Name"
              />
              <button disabled={creatingCategories} className="primary">
                {creatingCategories ? " Creating" : "Create"}
              </button>
            </form>
            <div className="all-categories">
              <div className="category-header">
                <span>
                  Available Categories
                  <button onClick={getCategories} className="secondary">
                    <i class="ri-reset-right-line"></i>
                  </button>
                </span>
              </div>
              <hr />
              <ul>
                {loadingCategories ? (
                  <div className="loading-container">
                    <Loaders />
                  </div>
                ) : (
                  categories.map((category, index) => (
                    <li key={index}>
                      {category.name}{" "}
                      <span className="secondary-text">
                        {getRealDate(category.createdAt)}
                        <button onClick={() => handleCategoryDelete(category._id)} className="delete"><i className="ri-delete-bin-6-line"></i></button>
                      </span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Categories;
