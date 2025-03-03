const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the data
const InquirySchema = new Schema({
  date: {
    type: String, // Consider using Date type for proper date handling
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'], // Email validation
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Phone number must be in the format xxx-xxx-xxxx'],
  },
  message: {
    type: String,
    required: true,
    maxlength: 500, // Optional: limit message length
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product', // Reference to the Product model
    required: true,
  },
});

// Export the model
module.exports = mongoose.model('Inquiry', InquirySchema);
