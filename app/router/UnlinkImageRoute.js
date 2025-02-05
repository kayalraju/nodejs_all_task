const express = require('express');
const unlinkImageController = require('../controller/unlinkImageController');
const uploadImage = require('../helper/unlinkImage');

const router = express.Router();


router.get('/unlink',unlinkImageController.unlinkImage);
router.get('/unlink/add',unlinkImageController.unlinkImageadd);
router.post('/unlink/create',uploadImage.single('image'),unlinkImageController.unlinkImageCreate);
router.get('/unlink/edit/:id',unlinkImageController.unlinkedit)
router.post('/unlink/upload/:id',uploadImage.single('image'),unlinkImageController.unlinkupdate)
router.delete('/unlink/image/data/:id',unlinkImageController.deleteImage)






module.exports = router;