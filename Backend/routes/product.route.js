const express = require('express');
const { addProduct, getAllProducts, editProduct, deleteProduct, getProductById, getProductsForHomepage } = require('../controllers/product.controller');
const router = express.Router();

// Add a product with file upload
router.post('/add-products', addProduct);

// Get all products
router.get('/get-all-products', getAllProducts);

//edit a product
router.put('/products/:id', editProduct);

//delete selected products
router.delete('/products/:id', deleteProduct);

//get a single product through its id
router.get('/products/:id', getProductById);

//get a single product through its id
router.get('/home/products', getProductsForHomepage);

// Other routes...

module.exports = router;
