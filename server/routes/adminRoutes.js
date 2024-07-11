const express=require('express');
const {getAllUsers, countAll} = require('../controllers/Admin');
const { showLoads } = require('../controllers/Load');
const { showTrucks } = require('../controllers/Truck');
const {getCoordinates,haversineDistance,checkAuth}=require('../middlewares/middleware')
// const getAllTrucks=require('../controllers/Admin');
// const getAllUsers=require('../controllers/Admin');
const router=express.Router();

router.get('/',countAll);
router.get('/users',checkAuth,getAllUsers);
router.get('/trucks',showTrucks);
router.get('/loads',checkAuth,showLoads);

module.exports=router;