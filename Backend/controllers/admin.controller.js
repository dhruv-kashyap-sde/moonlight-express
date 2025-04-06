const Admin = require("../models/admin.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Enhanced input validation
  if (!email || !password) {
    return res.status(400).json({ message: "Please add all the fields" });
  }

  // Additional email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    let admin = await Admin.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    // Enhanced JWT configuration
    const token = jwt.sign(
      { email, id: admin._id },
      process.env.JWT_SECRET_KEY,
      { 
        expiresIn: '1h',
        audience: 'moonlight-express-admin',
        issuer: 'moonlight-express-api'
      }
    );

    // Enhanced cookie security
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600000, // 1 hour
      path: '/'
    });

    res.json({
      message: "Login successful",
      success: true
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: "Server error during login" });
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/'
  }).json({ message: "Logged out successfully", success: true });
};

exports.dashboard = async (req, res) => {
  try {
    let { email } = req.user;
    let admin = await Admin.findOne({ email });

    if (!admin) return res.status(401).json({ message: "User not found" });

    res.json({ 
      message: "Welcome to Admin Dashboard", 
      success: true
    });
  } catch (error) {
    console.error('Dashboard access error:', error);
    res.status(500).json({ message: "Server error accessing dashboard" });
  }
};
