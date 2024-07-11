const express=require('express');
const { signupAuth, showUsers, loginAuth } = require('../controllers/Auth');
const { checkAuth } = require('../middlewares/middleware');
const router=express.Router();


router.post('/signup',signupAuth);
router.post('/login',loginAuth)
router.get('/users',showUsers);
module.exports=router;