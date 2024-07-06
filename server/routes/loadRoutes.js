
const express=require('express');
const { addLoad, editLoad, deleteAll, showLoads, deleteLoad } = require('../controllers/Load');

const router=express.Router();
router.get('/',showLoads);
router.post('/',addLoad);
router.get('/d',deleteAll);
router.delete('/',deleteLoad);
router.patch('/',editLoad);

module.exports=router;