const express = require('express');
const csv_route = express();
const bodyParser = require('body-parser');


//use body parser for get data from form body
csv_route.use(bodyParser.json());
csv_route.use(bodyParser.urlencoded({ extended: true }));
//use multer for file upload
const multer = require('multer');
const path = require('path');
const { AddCsvfile } = require('../controller/csvController');
//define the static folder 
csv_route.use(express.static('public'));

// use multer diskStorage for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/csvuploads'), function (error, success) {
            if (error) throw error;
        })
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname)
    }
});
//define uploaded storage path
const upload = multer({ storage: storage });

csv_route.post('/add-csv',upload.single('file'), AddCsvfile);


module.exports = csv_route