const path = require('path');
const Product = require("../models/product.model");
const cloud = require('cloudinary').v2;
const uploadss = require('../configs/multerConfig');
const dotenv = require('dotenv').config();

// Configure Cloudinary (add this at the top of your file)
cloud.config({ 
  cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`
});

// add product
exports.addProduct = async (req, res) => {
  try {
    // Handle file upload using multer and cloudinary
    uploadss.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const { name, description, price, categoryID } = req.body;
      
      // Initialize empty variable for image
      let images = [];

      // // If a product image is uploaded, upload to Cloudinary
      if (req.file) {
        console.log(req.file);
        
        try {
          const result = await cloud.uploader.upload(req.file.path);
          console.log(result);
          console.log(images);
          images.push(result.secure_url);
        } catch (cloudinaryError) {
          console.log(images);
          return res.status(400).json({ error: "Error uploading image to Cloudinary" });
        }
      }

      const newProduct = new Product({
        name,
        description,
        price,
        category: categoryID,
        images: images,
      });
      console.log(images);
      

      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Show all products
exports.getAllProducts = async (req, res) => {
  try {
    let allProducts = await Product.find().populate("category", "name");
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit a product
exports.editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, images } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, category, images },
      { new: true, runValidators: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fs = require('fs');

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the product to get the image path
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Extract the relative path from the full URL
    const imageUrl = product.images[0];
    if(imageUrl){
      const imagePath = imageUrl.replace(/^http:\/\/.*:\d+\//, '');

      // Remove the image file from the uploads folder
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error('Error deleting image file:', err);
        }
      });

    }
    
    // Delete the product from the database
    await Product.findByIdAndDelete(id);

    res.status(200).json({ message: 'Product and image deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Fetch a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate("category", "name");
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
