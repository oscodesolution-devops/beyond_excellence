const express = require('express')
require('dotenv').config()
const cors = require('cors')
const GoogleStategy = require('passport-google-oauth20')
const passport = require('passport')
const cookieSession = require('cookie-session')
const connectDb = require('./src/Database/dbConfig')
const authGoogle = require('./src/Router/auth')
const session = require('express-session')
//Swagger 
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const errorMiddleware = require('./src/Middleware/error-middleware');
const swaggerJsdoc = YAML.load('./swagger.yaml')
const passportSetup = require('./src/Services/Passport');
const oAuth = require('passport-google-oauth20').Strategy
const User = require('./src/Model/user-model')
const app = express();
const corsOption = {
    origin:process.env.FRONTEND_PATH,
    method:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
}
app.use(cors(corsOption))
app.use(express.json());
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerJsdoc));

//setup Session

app.use(session({
        secret:"helloguysiamabhisheknafwearetheoneofthebiggestfanofthisvideoiknowverywell",
        resave:false,
        saveUninitialized: true
    })
)
//setup passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new oAuth({
        clientID:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:`/auth/google/callback`,
        scope:["profile","email"]
    },
    
    async(accessToken,refreshToken,profile,done)=>{
        console.log("==>");
          console.log("Check By Chiku",profile);
          console.log("==>");
        try {

            let userExict = await User.findOne({email:profile.emails[0].value});
            if(!userExict){
                userExict = new User({
                    name:profile.displayName,
                    last:"kumar",
                    email:profile.emails[0].value || "",
                    password:profile.id,
                    number:"7485964152"
                });
                await userExict.save();

        } return done(null,userExict )}
        catch (error) {
            return done(error,null)
        }
    })
)
passport.serializeUser((user,done)=>{
    done(null,user)
});

passport.deserializeUser((user,done)=>{
    done(null,user);
})

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))
app.get("/auth/google/callback" ,passport.authenticate("google",{
    failureRedirect:"http://localhost:5173/login",
    successRedirect:"http://localhost:5173/profile"
}))

app.get('/login/success',(req,res) => {
    if(req.user){
        res.status(201).json({
        message:"Successfully Logged In",
        user:req.user
    })
    }else{
    res.status(403).json({
        message:"Not Authorized"
    })
}
})

app.get('/logout',(req,res,next)=>{
    req.logout(
        function(err){
            if(err){return next(err)}
                res.redirect("http://localhost:5173");
        }
    );

})
app.use('/api/auth',require('./src/Router/auth-router'));
app.use('/admin',require('./src/Router/admin-router'));
app.use(errorMiddleware)
const PORT = 4000;
connectDb().then(()=>{
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})
}).catch((err)=>{console.log(err)})