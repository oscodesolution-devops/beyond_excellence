const cloudinary = require('cloudinary').v2;
const  fs = require('fs')
require("dotenv").config();


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key:process.env.CLOUDINARY_API,  
  api_secret:process.env.CLOUDINARY_API_SECRET, 
});



const uploadOnCloudinary = async (localFilePath) => {
  try {
    if(!localFilePath) return null

    // UPLOAD THE FILE IN CLOUDINARY 

    const response = await cloudinary.uploader.upload(localFilePath)
    console.log("==>");
      console.log("Check By Chiku  22 Cloudinary", response);
      console.log("==>");

      return response
    
    // FILE HAS BEEN UPLOADED SUCCESSFULLY
  } catch (error) {
    fs.unlinkSync(localFilePath)
    console.log(error);
    return null
    
  }

}

module.exports = cloudinary;
