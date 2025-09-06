const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  course: {
    type: String,
    enum: ["BCA Year 1 (2024-2027)", "BCA Year 2 (2025-2028)"],
    required: true
  },
  faculty: {
    type: String,
    enum: ["Meenakshi", "Kiranpreet", "Karuna", "Ashwini", "Pratieksha"], 
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  improvement: {
    type: String,
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Feedback', feedbackSchema);
