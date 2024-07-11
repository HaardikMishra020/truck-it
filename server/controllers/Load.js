const Load=require('../models/Load')
const moment=require('moment');
const {getCoordinates}=require('../middlewares/middleware');
const {haversineDistance}=require('../middlewares/middleware')

//Adding the load in DB.
const addLoad=async(req,res)=>{
    try{
    const load=req.body;
    load.source=load.source.name;
    load.destination=load.destination.name;
    
    const sourcecoord=getCoordinates(load.source);
    const desticoord=getCoordinates(load.destination);

    // console.log(moment(load.date).fromNow());
    // var date=new Date();
    // const datee=moment(load.date).format("dddd, MMMM Do YYYY, h:mm:ss a")
    // var date2=new Date(load.date);
    // var ms=date.getTime()-date2.getTime();
    // console.log(ms/(1000*60*60));


    //formatting the date
    load.date=moment.utc(load.date).local().format('YYYY-MM-DDTHH:mm:SS.sss');
    //calculating haversine distance bw 2 coordinates
    const distance=Math.ceil(haversineDistance(sourcecoord.latitude,sourcecoord.longitude,desticoord.latitude,desticoord.longitude));
    const owner="Tony Stark"
    //appending few other attributes to object to be inserted in DB.
    const response=await Load.create({...load,isBooked:false,distance:distance,owner:req.user.userId});
    // await Load.create(load);
    // console.log('DONE INSERTING ONE');
    }
    catch(err){
        console.log(err);
    }
}

const editLoad=async(req,res)=>{
    try{
        await Load.updateOne({ _id:124 },{source:"Agra"});
    }
    catch(err){
        console.log(err);
    }
}

//to delete load.
const deleteLoad=async(req,res)=>{
    try{
        const loadId=req.params.id;
        await Load.findByIdAndDelete(loadId);
        console.log('deleted one load entry');
        res.status(200).json({msg:"Load Deleted Successfully"});
    }
    catch(err){
        console.log(err);
    }
}

const deleteAll=async(req,res)=>{
    try{
        await Load.deleteMany({});
        res.send("Deleted all entries");
    }
    catch(err){
        console.log(err);
    }
}



const showLoads=async(req,res)=>{
    try{
        const response=await Load.find({}).populate('owner');
        response.forEach(item=>{
            const dated=moment(item.date).format("dddd, MMMM Do YYYY, h:mm:ss a");
            item.date=dated;
        })
        
        res.json(response);
    }
    catch(err){
        console.log(err);
    }
}

module.exports={addLoad,editLoad,deleteAll,showLoads,deleteLoad}
