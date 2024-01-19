require("dotenv").config();
const mongoose = require("mongoose");


const connectDb = async () => {
    try {
       await mongoose.connect(process.env.DATABASE_LINK)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(`Error connecting to database: ${error}`);
    }
}
module.exports = connectDb;