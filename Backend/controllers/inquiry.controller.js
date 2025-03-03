const Inquiry = require("../models/inquiry.model");

// Add a new inquiry
exports.addInquiry = async (req, res) => {
  try {
    const { date, name, email, phone, message, product } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message || !product) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newInquiry = new Inquiry({
      date,
      name,
      email,
      phone,
      message,
      product,
    });
    const savedInquiry = await newInquiry.save();
    res.status(201).json(savedInquiry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// fetch all the inquiries
exports.getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().populate({
      path: 'product',
      populate: {
        path: 'category',
        select: 'name'
      }
    });
    res.status(200).json(inquiries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
