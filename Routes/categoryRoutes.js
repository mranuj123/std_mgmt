const express=require('express')
const{postCategory}=require('../Controller/categoryController')
const router=express.Router()

router.post('/postcategory',postCategory)

module.exports=router