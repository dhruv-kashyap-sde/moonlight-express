const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");
const jwt = require("jsonwebtoken");

// Middleware to verify token
const verifyToken = (req, res, next) => {
   try {
     const token = req.body.token;
     if (!token) return res.status(401).json({ message: "Unauthorized" });
   
     jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
       if (err) return res.status(403).json({ message: "Invalid Token" });
       req.user = decoded;
       next();
     });
   } catch (error) {
    res.status(401).json({error: error.message});
   }
  };

// **Login Route**
router.post("/admin/login", adminController.login);

// **Logout Route**
router.post("/admin/logout", adminController.logout);

// **Protected Admin Route**
router.post("/admin/dashboard", verifyToken, adminController.dashboard);

//create an admin
// router.post('/admin', adminController.createAdmin);

module.exports = router;