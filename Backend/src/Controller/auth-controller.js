const User = require('../Model/user-model')
const Course = require('../Model/course-model')
const bcrypt = require('bcryptjs')
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

//Try
const Try = async (req,res) => {
    try {
            res.send("hello its work ")
    } catch (error) {
        res.states(500).send({msg:"page not found"})
        
    }
}
// ============================================  user   ===================================

const Getcourse = async (req,res) => {
  try {
        res.send("hello its work ")
    } catch (error) {
        res.states(500).send({msg:"page not found"})
        
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
    const {title,description,images,price,content,enrolledStudents} = req.body;
    const newCourse = await Course.create({title,description,images,price,content,enrolledStudents})
    console.log('new course',newCourse)
    res.status(201).json({msg:"Course added Successfull", res:newCourse});
    } catch (error) {
       console.log('Error in uploading course', error);
    }
}

module.exports = {Home , Registration ,Login , Try ,Admin,CourseUpload,Getcourse}