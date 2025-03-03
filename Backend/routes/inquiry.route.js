const express = require('express');
const { addInquiry, getAllInquiries } = require('../controllers/inquiry.controller');
const router = express.Router();

//add inquiry
router.post('/add-inquiry', addInquiry);

// get all inquiries
router.get('/inquiries', getAllInquiries);

module.exports = router;
