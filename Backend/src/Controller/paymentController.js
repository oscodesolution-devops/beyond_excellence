
const Razorpay = require('razorpay');
const crypto = require('crypto');
const payment = require("../Model/purchase-model")
module.exports.order = (req,res) => {
var instance = new Razorpay({ key_id: 'rzp_test_w5tUZnIztEKoBO', key_secret: 'eLG7wVfzLAJJVVeIi6Q58QLz' })

var options = {
  amount: req.body.amount * 100,  // amount in the smallest currency unit
  currency: "INR",
};
instance.orders.create(options, function(err, order) {
    if(err){
        res.json({"status": 404 , "message":"Internal Server Error!"})
    }
            res.json({status: 201 , message:"Order Placed", data:order})

  console.log(order);
});
}


module.exports.verify = async (req,res) => {
   const courseId = req.params.courseId;
    let {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
    const userId = req.user._id;
    console.log("==>");
      console.log("Check By Chiku 27 ",userId);
      console.log("Check By Chiku 28 ",courseId);
      console.log("==>");
    let expectedSignature = crypto
  .createHmac('sha256', "eLG7wVfzLAJJVVeIi6Q58QLz")
 .update(`${razorpay_order_id}|${razorpay_payment_id}`) 

  let digest=expectedSignature.digest('hex');
if (digest === razorpay_signature) {
  // Signatures match, payment is valid
  await payment.create({
    orderId:razorpay_order_id,
    paymentId: razorpay_payment_id,
    razorpaySignature:razorpay_signature,
    studentId:userId,
    courseId:courseId
  })
  console.log('Payment signature verified successfully!');
} else {
  // Signatures don't match, handle invalid payment
  console.error('Payment signature verification failed!');
}
res.json({ razorpay_order_id });
}

