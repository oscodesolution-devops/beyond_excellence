const mongoose = require('mongoose');
const coursesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: String, // Store image URLs
        required: true,

  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
  duration: {
    type: String,
    required: true,
    min: 0,
  },
  content: {
    type: String, // Array of content sections
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default:Date.now
  },
  course:{type:Array},
  purchaseDate: {
    type: Date,
  },
  expiryDate: {
    type: Date,
  },
  enrolledStudents: {
    type: mongoose.Schema.Types.ObjectId,
    ref : 'user' 
  }

});

const Course = new mongoose.model('course', coursesSchema) ;
module.exports = Course;