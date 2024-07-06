const express=require('express');
const {getAllLoads,getAllTrucks,getAllUsers, countAll} = require('../controllers/Admin');
// const getAllTrucks=require('../controllers/Admin');
// const getAllUsers=require('../controllers/Admin');
const router=express.Router();

router.get('/',countAll);
router.get('/users',getAllUsers);
router.get('/trucks',getAllTrucks);
router.get('/loads',getAllLoads);

module.exports=router;