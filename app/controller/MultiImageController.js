const multiImage=require('../model/multipleimage/multiImage1');
const path = require('path')
const  fs = require('fs')

class MultiImageController {

    async createMultiImage(req,res){
        try {
           
            const { name} = req.body;
            const images = req.files.map(file => file.path)
            const multi = new multiImage({ name,images })
            const createdMult = await multi.save();
            return res.status(201).json({ status: true, message: 'Data created', data:createdMult })
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ status: false, message: error.message })
        }


    }



}

module.exports = new MultiImageController();