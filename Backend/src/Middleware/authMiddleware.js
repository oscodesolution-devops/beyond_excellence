const jwt = require('jsonwebtoken');
const { isValid } = require('zod');
const User = require('../Model/user-model')

const authMiddleware = async (req,res,next) => {
    const token = req.header("Authorization");
    const jswToken = token.replace("bearer","").trim();
    console.log("Token from middleware 8 ====>\n",jswToken);
    try {
        const isVarify = jwt.verify(jswToken,process.env.JWT_SECRET)
        const userData = await User.findOne({email:isVarify.email})
        .select({
            password:0,
            isVerify:0,
        })
        req.user = userData;
        req.Token = token;
        req.id = userData._id;
        req.isAdmin = userData.isAdmin;
        next();
    } catch (error) {

                return res.status(401).send({message: "UnAuthorization HTTP Request , token not provide"})

    }
}

module.exports = authMiddleware