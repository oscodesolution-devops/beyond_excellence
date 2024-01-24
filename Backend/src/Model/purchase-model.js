const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course', // Reference to the Course schema
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Reference to the Course schema
  },
  purchaseDate: {
    type: Date,
    default:Date.now()
  },
  expiryDate: {
    type: Date,
    
  },
  orderId:{
    type : String ,
    required: true,
  },
   paymentId:{
    type : String ,
    required: true,
  },
   razorpaySignature:{
    type : String ,
    required: true,
  },
});

const Purchase = new mongoose.model('purchase', purchaseSchema) ;
module.exports = Purchase;