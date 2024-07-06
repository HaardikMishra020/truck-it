const Truck=require('../models/Truck');

const showTrucks=async (req,res)=>{
    try{
const response=await Truck.find({});
return res.json(response);
}
catch(err){
    console.log(err);
}
}

const addTruck=async(req,res)=>{
    try{
        const truck=req.body;
        const response=await Truck.create(truck);
        return res.status(200).json({msg:"Inserted successfully"});
    }
    catch(err){
        console.log(err);
    }
}

module.exports={addTruck,showTrucks};
