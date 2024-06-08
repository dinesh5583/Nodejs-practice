const express=require('express');
const path=require('path');
const rootDir=require('../utils/path.js')
const router = express.Router()

router.get('/add-product',(req,res,next)=>{
    // console.log(path.join(rootDir,'views','add-product.html'));
    // 1. one way to get file path
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    // 1. another way to get file path
    res.sendFile(path.join(rootDir,'views','add-product.html'))
    // res.send("<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>")
})
router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
})

module.exports=router