const express = require("express");
const router = express.Router();
const AC = require("../Controller/auth-controller")
const validate = require('../Middleware/validate-middleware')
const V = require('../Validator/auth-validator')
const verifyToken = require('../Middleware/verifyToken');


router.route('/courseUpload').post(verifyToken,AC.CourseUpload)

module.exports = router;