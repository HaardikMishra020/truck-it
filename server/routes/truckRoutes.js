const express=require('express');
const { showTrucks, addTruck } = require('../controllers/Truck');
const router=express.Router();

router.get('/',showTrucks);
router.post('/',addTruck);

module.exports=router;
