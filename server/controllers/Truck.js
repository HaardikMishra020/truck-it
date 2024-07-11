const Truck=require('../models/Truck');

const showTrucks=async (req,res)=>{
    try{
    const response=await Truck.find({}).populate('owner');
    res.json(response);
}
catch(err){
    console.log(err);
}
}

const addTruck=async(req,res)=>{
    try{
        const truck=req.body;
        const response=await Truck.create({...truck,owner:req.user.userId});
        return res.status(200).json({msg:"Inserted successfully"});
    }
    catch(err){
        console.log(err);
    }
}

const deleteTruck=async(req,res)=>{
    try{
        const truckId=req.params.id;
        await Truck.findByIdAndDelete(truckId);
        res.status(200).json({msg:"Truck Deleted Successfully"});
    }
    catch(err){
        console.log(err);
    }
}

module.exports={addTruck,showTrucks,deleteTruck};
