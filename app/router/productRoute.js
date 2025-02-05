const express = require('express');
const apiController = require('../controller/apiController');
const productImageUpload = require('../helper/productImage');
const router = express.Router();


router.post('/create',productImageUpload.single('image'),apiController.create);
router.get('/single/:slug',apiController.gettdataBySlug);;
router.get('/all',apiController.getdata);
router.get('/edit/:id',apiController.getdataById);
router.put('/update/:id',apiController.update);
router.delete('/delete/:id',apiController.delete);
router.get('/filter/name',apiController.filterByName);

router.get('/pagination',apiController.pagination);
router.post('/search',apiController.search);



/**ejs */



module.exports = router;