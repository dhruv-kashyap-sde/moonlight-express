const express = require('express');
const { addInquiry, getAllInquiries, deleteInquiry } = require('../controllers/inquiry.controller');
const router = express.Router();

//add inquiry
router.post('/add-inquiry', addInquiry);

// get all inquiries
router.get('/inquiries', getAllInquiries);

// delete inquiry
router.post('/delete-inquiry', deleteInquiry);

module.exports = router;
