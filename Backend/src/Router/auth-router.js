const express = require("express");
const router = express.Router();
const AC = require("../Controller/auth-controller")
const validate = require('../Middleware/validate-middleware')
const V = require('../Validator/auth-validator')
const verifyToken = require('../Middleware/verifyToken');
const authMiddleware = require('../Middleware/authMiddleware')
router.route('/').get(AC.Home);
router.route('/register').post(validate(V.signupSchema),AC.Registration);
router.route('/login').post(validate(V.loginSchema),AC.Login);
router.route('/user').get(authMiddleware ,AC.UserData);
router.route('/payment').get(authMiddleware,AC.Payment);
router.route('/course').get(AC.Getcourse);
router.route('/course/:id').get(AC.Findcourse);

module.exports = router;