
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



module.exports = {UserUpdate}