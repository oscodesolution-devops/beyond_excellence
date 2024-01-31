
const User = require('../Model/user-model')
const Course = require('../Model/course-model')
const Purchase = require('../Model/purchase-model')



const  UserUpdate = async(req,res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updateUser = await User.updateOne({_id:id},{
            $set : data,
        })
        return res.status(201).json({msg:updateUser})        
    } catch (error) {
        console.log("Error in user update : ", error);
        next(error)
    }

}




const  DeleteCourse = async(req,res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updateUser = await Course.deleteOne({_id:id})
        return res.status(201).json({msg:"Course Deleted "})        
    } catch (error) {
        console.log("Error in user update : ", error);
        next(error)
    }

}


const GetPayment = async(req,res) => {
    try {
        const purchase = await Purchase.find()
        .populate('courseId', 'title link price')
        .populate('studentId', 'name email') // Specify fields to populate for the user
      if (!purchase) {
        next(error)
        }
        res.status(200).json(purchase);
        
    } catch (error) {
        console.log("Error in getting payment details : ", error);
        next(error)
        
    }
}

module.exports = {UserUpdate ,DeleteCourse , GetPayment}