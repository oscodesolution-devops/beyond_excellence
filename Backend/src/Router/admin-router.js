const express = require("express");
const router = express.Router();
const AC = require("../Controller/auth-controller")
const validate = require('../Middleware/validate-middleware')
const V = require('../Validator/auth-validator')
const verifyToken = require('../Middleware/verifyToken');
const upload = require('../Middleware/multerMiddleware.js')

const CURD = require('../Controller/Crud-controller.js')



router.route('/courseUpload').post(verifyToken,upload.single("thumbnail"),AC.CourseUpload)
router.route('/course/delete/:id').delete(verifyToken,CURD.DeleteCourse)
router.route('/payments').get(verifyToken,CURD.GetPayment)

module.exports = router;

