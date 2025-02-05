
const express=require('express')
const HomeController = require('../controller/HomeController')
const AboutController = require('../controller/AboutController')
const productImageUpload = require('../helper/productImage')

const router=express.Router()


router.get('/',HomeController.home)
router.get('/product',HomeController.product)
router.post('/create/product',productImageUpload.single('image'),HomeController.creatreproduct)
router.get('/edit/product/:id',HomeController.edit)
router.post('/update/product/:id',HomeController.update)
router.get('/delete/product/:id',HomeController.delete)
router.get('/about', AboutController.about)


module.exports=router