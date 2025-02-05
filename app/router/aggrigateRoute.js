const express = require('express');
const AggrigateController = require('../controller/AggrigateController');
const router = express.Router();


router.post('/create/product',AggrigateController.createProduct)




module.exports = router;