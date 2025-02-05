
const express=require('express')
const joiController = require('../controller/joiController')


const router=express.Router()


router.post('/create/student',joiController.create)



module.exports=router