const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course-model', // Reference to the Course schema
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user-model', // Reference to the Course schema
    required: true,
  },
  purchaseDate: {
    type: Date,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
});

const Purchase = new mongoose.model('purchase', purchaseSchema) ;
module.exports = Purchase;