const mongoose=require('mongoose');
const User=require('../models/User');

const loadSchema=new mongoose.Schema({
    owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    source:String,
    destination:String,
    distance:Number,
    date:Date,
    material:String,
    weight:Number,
    lorry:String,
    rate:Number,
    isBooked:Boolean,
    remark:String,
    expdate: Date,
    // expireAt:{type: Date,
    //     default: Date.now,
    //     expires: '10m'}
});
const Load=new mongoose.model('Load',loadSchema);
module.exports=Load;