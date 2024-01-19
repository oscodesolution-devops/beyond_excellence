const  {v2} = require('cloudinary')
import fs from 'fs'
require("dotenv").config();


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_NAME, 
  api_key:process.env.CLOUDINARY_API,  
  api_secret:process.env.CLOUDINARY_API_SECRET, 
});