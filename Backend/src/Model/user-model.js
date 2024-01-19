const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
   last: {
    type: String,
    required: true,
    trim: true,
  },
 
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true, // Enforce lowercase for consistency
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  number: {
    type: String,
    trim: true,
    default: "",
    match: [/^\+?(\d{1,4})?[\s(-]?\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{4})$/, "Please provide a valid phoneNumber"],
          },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
  refreshToken: {
      type: String,
      select: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
   },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course-model', 
  }],
  purchaseCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'purchase-model', 
  }],
},
{
    timestamps: true,
    toJSON: { virtuals: true },
  });





//Hash Password
  userSchema.pre('save',async function(next){
    if (!this.isModified("password")) return next();
    const hash_password = await bcrypt.hash(this.password, 10);
    this.password=hash_password;
  })

// JWT Token 
userSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign(
        { _id : this._id.toString() , 
        email : this.email,
        isVerify:this.isVerify ,
        isAdmin:this.isAdmin
        },
        process.env.JWT_SECRET,{expiresIn:'1d'});
        console.log(token)
        await this.save()
        return token;
    } catch (error) {
        console.log("==>");
          console.log("Check By Chiku",error);
          console.log("==>"); 
    }
        
}

//compare password
userSchema.methods.checkPassword = async function(myPwd){
   return bcrypt.compare(myPwd,this.password) 
    }



const User = new mongoose.model('user', userSchema) ;
module.exports = User;