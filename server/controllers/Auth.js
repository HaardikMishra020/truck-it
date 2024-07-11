//importing required libraries and models
const User=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const secretKey='mainnhibataunga';

//handles the signup functionality i.e recieving user data, hashing the password and storing the hashed password instead of user password.
const signupAuth=async(req,res)=>{
    try{
        //if req.user already has details of a user, it means a user is already logged in
        if(req.user){
            return res.status(401).json({msg:"User already logged in"});
        }

        const {username,email,password}=req.body;
        const ree=await User.find({email:email});

        //if entered email already exists in DB, ree.length will be > 0
        if(ree.length>0){
            return res.status(401).json({msg:"Email already exists"});
        }

        //hashing the password using bcrypt. Passwords in DB should be hashed so that if DB gets compromised, user passwords are not at risk.
        const hashedPassword=await bcrypt.hash(password,6);
        const user=await User.create({username,email,password:hashedPassword});
        const token=jwt.sign({userId:user._id,email:user.email},secretKey,{expiresIn:'1h'},);

        res.status(201).json({ token, msg:"Registration successful" });
    }
    catch(err){
        console.log(err);
    }
}

//handles login functionality i.e recieving entered data, finding user data in DB, comparing the entered password with hashed pswd, if all good then creating a jwt and sending it to client.
const loginAuth=async(req,res)=>{
    try{
        const{email,password}=req.body;
        
        const user=await User.find({email:email});
        
        if(user.length==0){
            return res.status(401).json({msg:"User does not exists"});
        }
        const comparePswd=await bcrypt.compare(password,user[0].password);
        if(!comparePswd){
            return res.status(401).json({msg:"Incorrect password"});
        }
        const token=jwt.sign({userId:user[0]._id,email:user[0].email},secretKey,{expiresIn:'1h'},);
        
        res.status(200).json({token,userId:user[0]._id});
        
    }
    catch(err){
        console.log(err);
    }
};

//testing api endpoint to see all users data
const showUsers=async(req,res)=>{
    try{
    const response=await User.find({});
    res.json(response);}
    catch(err){
        console.log(err);
    }
}

//exporting all the callback functions.
module.exports={signupAuth,showUsers,loginAuth};