const passport = require('passport')
const router = require('express').Router()

router.get('/login/success',(req,res) => {
    if(req.user){
        res.status(201).json({
        error:false,
        message:"Successfully Logged In",
        user:req.user
    })
    }else{
    res.status(403).json({
        error:true,
        message:"Not Authorized"
    })
}
})

router.get('/login/failed',(req,res) => {
    res.status(401).json({
        error:true,
        message:"Login Failed"
    })
})

router.get(
    "/google/callback",
    passport.authenticate("google",{
        successRedirect:"http://localhost:5173/",
        failureRedirect:"/login/failed",
    })
)

router.get("/google",passport.authenticate("google",["profile","email"]));

router.get('/logout',(req,res)=>{
    req.logOut();
    res.redirect(process.env.GOOGLE_CLIENT_URL);

})

module.exports = router;