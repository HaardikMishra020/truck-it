const mongoose=require('mongoose');

const loadSchema=new mongoose.Schema({
    owner:String,
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
    // expireAt:{type: Date,
    //     default: Date.now,
    //     expires: '10m'}
});
const Load=new mongoose.model('Load',loadSchema);
module.exports=Load;