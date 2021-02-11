const User = require('../models/user')
const shortId = require('shortid')
const user = require('../models/user')
const jwt = require('jsonwebtoken')
const expressJwt = require('express-jwt');

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
    const token = jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
    res.cookie('token',token,{expiresIn:'1d'})
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
    userProperty: "auth",
  });




















