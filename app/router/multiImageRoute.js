const express = require('express');
const uploadImage = require('../helper/multiImage');
const MultiImageController = require('../controller/MultiImageController');


const router = express.Router();


router.post('/multiImage',uploadImage.array('image',5),MultiImageController.createMultiImage);







module.exports = router;