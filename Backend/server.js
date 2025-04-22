const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/category.route');
const productRoutes = require('./routes/product.route');
const adminRoutes = require('./routes/admin.route');
const inquiryRoutes = require('./routes/inquiry.route');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet'); // Added import for helmet
const rateLimit = require('express-rate-limit');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;

const dotenv = require('dotenv');
const { access } = require('fs');
dotenv.config();

// Body parser middleware
app.use(bodyParser.json());

// Cookie parser middleware for token handling
app.use(cookieParser());

// Security middleware
app.use(helmet()); // Adds various HTTP headers for security

// Enhanced rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many login attempts, please try again later',
  standardHeaders: true,
  legacyHeaders: false
});

// Apply rate limiter to login route
app.use('/api/admin/login', loginLimiter);
// Apply general rate limiting to all API routes
app.use('/api', apiLimiter);

// CORS configuration - improved to handle preflight requests properly
app.use(cors({
  origin: ["https://moonlight-express.onrender.com", "http://localhost:5173"],
  credentials: true, // Allow cookies to be sent with requests
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Handle CORS errors
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({
      message: 'CORS not allowed for this origin'
    });
  }
  next(err);
});

// Add OPTIONS response for preflight requests
app.options('*', cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded images

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', adminRoutes);
app.use('/api', inquiryRoutes);

app.get('/', (req, res) => {
  res.send('server working')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
