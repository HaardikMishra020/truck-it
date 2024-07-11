const Load=require('../models/Load')
const Truck=require('../models/Truck');
const User=require('../models/User');

const countAll=async (req,res)=>{
    try{
    const loads=await Load.countDocuments({});
    const users=await User.countDocuments({});
    const trucks=await Truck.countDocuments({});;
    return res.json({load:loads,user:users,truck:trucks});}
     catch(err){
        res.status(500).json({message:err});
     }
}
const getAllLoads=async(req,res)=>{
    try{
    const response=await Load.find({});
    if(!response){
        return res.status(404).json({msg:"Loads not found"});
    }
    res.send(response);
}
    catch(err){
        console.log(err);
    }
}

const getAllTrucks=async(req,res)=>{
    try{
        const response=await Truck.find({});
        if(!response){
            return res.status(404).json({msg:"Trucks not found"});
        }
        res.send(response);
    }
        catch(err){
            console.log(err);
        }
}
const getAllUsers=async(req,res)=>{
    try{
        const response=await User.find({});
        if(!response){
            return res.status(404).json({msg:"Users not found"});
        }
        res.send(response);
    }
        catch(err){
            console.log(err);
        }
}

module.exports={getAllLoads,getAllTrucks,getAllUsers,countAll};