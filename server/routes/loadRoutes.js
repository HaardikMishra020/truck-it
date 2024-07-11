
const express=require('express');
const { addLoad, editLoad, deleteAll, showLoads, deleteLoad } = require('../controllers/Load');
const { checkAuth } = require('../middlewares/middleware');

const router=express.Router();
router.get('/',checkAuth,showLoads);
router.post('/',checkAuth,addLoad);
router.get('/d',deleteAll);
router.delete('/:id',deleteLoad);
router.patch('/',editLoad);

module.exports=router;