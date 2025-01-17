// =====================================Method 3 =================================================

// multerConfig.js
// const multer = require('multer');

// const storage = multer.diskStorage({
//      filename: function (req, file, cb) {
//      cb(null, file.originalname);
//    }
// }
// );
// const upload = multer({ storage: storage });

// module.exports = upload;


// =====================================Method 1 =================================================
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../temp/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage: storage }).single("file");

// module.exports = upload;



// =====================================Method 2 =================================================

// const multer = require("multer");
// const fs = require("fs");

// const destinationDirectory = "../temp";

// // Create the destination directory if it doesn't exist
// if (!fs.existsSync(destinationDirectory)) {
//   fs.mkdirSync(destinationDirectory);
// }

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, destinationDirectory);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// const upload = multer({ storage: storage }).single("file");

// module.exports = upload;



////multer
const multer = require('multer');
const path = require('path');

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename the file
  }
});

const upload = multer({ storage: storage });
module.exports = upload;
