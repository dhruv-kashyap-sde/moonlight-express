const express = require('express');
const { createCategory, addProductToCategory, getAllCategories } = require('../controllers/category.controller');
const router = express.Router();

// Create a new category
router.post('/create-category', createCategory);

// Add a product to a category
router.post('/products', addProductToCategory);

// Get all categories
router.get('/categories', getAllCategories);

module.exports = router;
