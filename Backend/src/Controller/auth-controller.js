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
   console.log(error);
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

const CourseUpload = async (req, res) => {

    try {
      const { title, description, price, content, duration, week, keypoint, classDetails, classkey, link , course } = req.body;
      
      console.log("Request Body Data:");
      console.log("Title:", title);
      console.log("Description:", description);
      console.log("Price:", price);
      console.log("Content:", content);
      console.log("Duration:", duration);
      console.log("Week:", week);
      console.log("Keypoint:", keypoint);
      console.log("Class Details:", classDetails);
      console.log("Class Key:", classkey);
      console.log("Link:", link);
      console.log("Course:", course);

      // Validate required fields
      if (!title || !description || !price || !duration ) {
        return res.status(400).json({ error: "All required fields must be provided." });
      }
  
      if (!req.file) {
        return res.status(400).json({ error: "Image file is required." });
      }
      // Upload the file to Cloudinary
      const image = await cloudinary.uploader.upload(req.file.path);
  
      const newCourse = await Course.create({
        title,
        description,
        images: image.secure_url,
        price,
        duration,
        week: JSON.parse(week), // Parse JSON string to array
        keypoint: JSON.parse(keypoint), // Parse JSON string to array
        classDetails: classDetails, // Parse JSON string to array of objects
        classkey: classkey,
        content,
        link,
        course
      });
  
      res.status(201).json({ msg: "Course added successfully", course: newCourse });
    } catch (error) {
      console.error("Error in uploading course:", error);
      res.status(500).json({ error: "Failed to upload course" });
    }
  };

  

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
  