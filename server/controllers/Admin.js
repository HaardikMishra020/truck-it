const Load=require('../models/Load')
const Truck=require('../models/Truck');

const countAll=async (req,res)=>{
    const loads=await Load.countDocuments({});
    const users=0;
    const trucks=await Truck.countDocuments({});;
    return res.json({load:loads,user:users,truck:trucks});
}
const getAllLoads=async(req,res)=>{
    try{
    const response=await Load.find({});
    if(!response){
        return res.status(404).json({msg:"Users not found"});
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
            return res.status(404).json({msg:"Users not found"});
        }
        res.send(response);
    }
        catch(err){
            console.log(err);
        }
}
const getAllUsers=(req,res)=>{
    return res.json({msg:"upcoming"});
}

module.exports={getAllLoads,getAllTrucks,getAllUsers,countAll};