const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = (req, res, next) => {
  try {
    // Get token from cookies
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed: No token provided' });
    }
    
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    
    // Add user info to request
    req.user = decoded;
    console.log("decoded", decoded);
    
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    
    // Provide specific error messages based on the error
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Authentication failed: Token expired' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Authentication failed: Invalid token' });
    }
    
    return res.status(401).json({ message: 'Authentication failed' });
  }
};