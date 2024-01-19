const express = require("express");
const router = express.Router();
const AC = require("../Controller/auth-controller")
const validate = require('../Middleware/validate-middleware')
const V = require('../Validator/auth-validator')
const verifyToken = require('../Middleware/verifyToken');

router.route('/').get(AC.Home);
router.route('/register').post(validate(V.signupSchema),AC.Registration);
router.route('/login').post(validate(V.loginSchema),AC.Login);
router.route('/course').get(AC.Getcourse);

module.exports = router;