const express=require('express');
const { showTrucks, addTruck, deleteTruck } = require('../controllers/Truck');
const { checkAuth } = require('../middlewares/middleware');
const router=express.Router();

router.get('/',checkAuth,showTrucks);
router.post('/',checkAuth,addTruck);
router.delete('/:id',deleteTruck);

module.exports=router;
