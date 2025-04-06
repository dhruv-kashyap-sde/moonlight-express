const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const verifyToken = require("../middlewares/verifyToken");
const cors = require('cors');

// Configure CORS for admin routes
const adminCorsOptions = {
  origin: ["https://moonlight-express.onrender.com", "http://localhost:5173"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

// **Login Route**
router.post("/admin/login", cors(adminCorsOptions), adminController.login);

// **Logout Route**
router.post("/admin/logout", adminController.logout);

// **Protected Admin Route**
router.get("/admin/dashboard", verifyToken, adminController.dashboard);

module.exports = router;