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
    // required: true,
  },
  price: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    // required: true,
  },
  week: {
    type: [String], // Array of strings
    required: true,
  },
  classDetails: {
    type: [],
    required: true,
  },
  keypoint: {
    type: [],
  },
  classkey: {
    type: String,
  },
  link: {
    type: String,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  course: {
    type: String,
  },
  purchaseDate: {
    type: Date,
  },
  expiryDate: {
    type: Date,
  },
  // enrolledStudents: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'user',
  // },
});

const Course = mongoose.model('course', coursesSchema);
module.exports = Course;
