const User = require('../models/user')
const shortId = require('shortid')
const BLog = require('../models/blog')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandler');



exports.signup=(req,res)=>{
  User.findOne({email:req.body.email}).exec((err,user)=>{
if(user){
    return res.status(400).json({
        error:'Email is already exist! please try  new one'
    })
}
 
const {name,email,password} = req.body
let username = shortId.generate();
let profile = `${process.env.CLIENT_URL}/profile/${username}`
let newUser = new User({name,email,password,profile,username});
newUser.save((err,success)=>{
if(err){
    res.status(400).json({
        error:err
    })
}

// res.json({
//     user:success 
// })
res.json({
    message:'signup success! Please Signin.'
})
})

  })
}

exports.signin = (req,res) => {
    const {email,password} = req.body;
    // check if user exist
 User.findOne({email}).exec((err,user)=>{
     if(err || !user){
         return res.status(400).json({
             error:"user with that email address does not exist. please signup!"
         })
     }

    // authenticate
    if(!user.authenticate(password)){
        return res.status(400).json({
            error:"email and password do not match!"
        })
    }
 //generate a token and send to client
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'15d'})
    res.cookie('token',token,{expiresIn:'15d'})
    const {_id,username,name,email,role} = user;
    return res.json({
        token,
        user:{_id,username,name,email,role}
    })


 });
   
};


exports.signout = (req,res)=>{
    res.clearCookie("token") 
    res.json({
         message:"signout Success"
    })
};
exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"], // added later
  //  userProperty: "auth",
  });



exports.authMiddleware = (req,res,next) => {
 const authUserId = req.user._id;
 User.findById({_id:authUserId}).exec((err,user)=>{
     if(err || !user){
         return res.status(400).json({
             error:'User not Found!'
         })
     }
     req.profile = user
     next()
 })
}

exports.adminMiddleware = (req,res,next) => {
    const adminUserId = req.user._id;
    User.findById({_id:adminUserId}).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:'User not Found!'
            })
        }
    if(user.role != 1){
        return res.status(400).json({
            error:'Admin resource access denied'
        })
    }

        req.profile = user
        next()
    })
   }
   


   exports.canUpdateDeleteBlog = (req, res, next) => {
    const slug = req.params.slug.toLowerCase();
    BLog.findOne({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        let authorizedUser = data.postedBy._id.toString() === req.profile._id.toString();
        if (!authorizedUser) {
            return res.status(400).json({
                error: 'You are not authorized'
            });
        }
        next();
    });
};


































