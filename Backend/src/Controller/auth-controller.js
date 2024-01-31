const User = require('../Model/user-model')
const Course = require('../Model/course-model')
const Purchase = require('../Model/purchase-model')
const bcrypt = require('bcryptjs')
const { response } = require('express')
const cloudinary = require("../Services/cloudinary")
// Home Page 
const Home = async (req,res) => {
    try {
            res.send("hello chiku")
    } catch (error) {
        res.states(500).send({msg:"page not found"})
        
    }

}

//Registration Page
const Registration = async (req,res) => {
    try {
        const {name,last ,email,password,number} = req.body;
        if(!name || !last||!email||!password||!number){
            return  res.status(400).json({msg:'Please enter all fields'
            })}
            else{
                const userExist = await User.findOne({ email });
                if (userExist) {
                    return  res.status(400).json({ msg: 'User already exists Please login instead of registration.' });
                }
            }
            const newUser = await User.create({name,last,email ,password ,number})
                // res.redirect('/login')
                res.status(201).json({msg:"Registration Successfull",token: await newUser.generateAuthToken()});

    } catch (error) {
        res.states(500).send({msg:"page not found"})
        process.exit(0);
    }
}
//Login
const Login = async (req,res) => {
    try {
        const {email,password} = req.body;
        if(!email||!password){
            return  res.status(400).json({msg:'Please enter all fields'
            })}
        else{
                const userExist = await User.findOne({ email });
                if (!userExist) {
                    return  res.status(400).json({ msg: 'Invalid Credentials' });
                }
                const user = await userExist.checkPassword(password);
                if(user) {
                    res.status(201).json({msg:"Login Successfull",token: await userExist.generateAuthToken()});
                    }
                    else{
                      res.status(400).json({ msg: 'Invalid Credentials' });
                    }

        }
          
    } catch (error) {
        res.states(500).send({msg:"page not found"})
        process.exit(0);
    }
}


// ============================================  user   ===================================

const Getcourse = async (req,res) => {
try{
    const course = await Course.find().select("-link");
    return res.json({course})

}catch(error){
    next(error)
}
}

const Findcourse = async (req,res) => {
try{
    const id = req.params.id;
    console.log(id);
    const course = await Course.findOne({_id:id}).select("-link");
    return res.json({course})
}catch(error){
    next(error)
}
}

const classLink =async (req,res) => {
    try {
        const courseId = req.params.id;
        const pay  = await Course.findOne({_id:courseId})
        if(!pay) {
            return res.error('Not for sale')
            }
            let link = pay.link
            return res.json(link)
    } catch (error) {
        next(error)
        
    }

}
// ============================================  ADMIN   ===================================

const Admin = async (req,res) => {
    if (req.user.isAdmin) {
    res.json({ message: 'Admin access granted' });
  } else {
    res.status(403).json({ message: 'Unauthorized: Admin access required' });
  }
}

const CourseUpload = async (req,res) => {
    try {
       
    const {title,description,price,content ,duration,week ,keypoint,classDetails,classkey ,link} = req.body;

    // const thumbnailLocalPath = req.files?.file[0]?.path ;
    // console.log("==>");
    //   console.log("Check By Chiku", req.files.file);
    //   console.log("==>");
    // if(!thumbnailLocalPath) {
    //     console.log('No Thumbnail')
    // }
    // const thumbnail = await uploadOnCloudinary(thumbnailLocalPath)
    // console.log("==>");
    //   console.log("Check By Chiku 112", thumbnail.url);
    //   console.log("==>");

    // if(!thumbnail) {
    //     conssole.log('No Thumbnail')
    // }

      const image = await cloudinary.uploader.upload(req.file.path, function (err , result){
        if(err){
            console.log(err);
        }
        // res.json(result.url)
      });
      console.log("130 \n \n",image.url);
    // Respond with Cloudinary URL or other relevant data

    const newCourse = await Course.create({title,description,images:image.url,link,classDetails,price,content,classkey,week,keypoint,duration})
    console.log('new course',newCourse)
    res.status(201).json({msg:"Course added Successfull\n\n", res:newCourse});
    } catch (error) {
       console.log('Error in uploading course', error);
    }
}

const Getuser = async (req,res) => {
try{
    const user = await User.find();
    return res.json({user})

}catch(error){
    next(error)
}
}

const UserData = async (req,res) => {
    try {
        const userData = req.user;
        return res.status(201).json({msg:userData})
    } catch (error) {
        console.log("User Error : ", error);
        
    }
}
const Purchases = async (req,res) => { 
    try { const user = await Purchase.find(); 
        return res.json({user}) } 
    catch (error)
     { console.log("User Error : ", error); } 
}

const Payment = async (req,res) => {
    try {
        const userId = req.user;
           console.log("==>");
          console.log("Check By Chiku 130",userId);
          console.log("==>");
        const allData = await Purchase.find({studentId:userId});
    res.status(200).json({data:allData,user:userId});
    } catch (error) {
        console.log("User Error : ", error);
        
    }
}

module.exports = {Home , Registration ,Login  ,Admin,CourseUpload,Getcourse,Findcourse ,UserData ,Payment,Purchases ,Getuser ,classLink}
  