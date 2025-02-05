
const slug=require('slugify')
const path=require('path')
const fs=require('fs')
const { ProductModel, ProductSchemaValidate } = require('../model/product')



class apiController {

    async create(req, res) {
       //log('wwww',req.file)
        try {
            const { name, price, description} = req.body
                const product = new ProductModel({
                    name,
                    price,
                    description,
                    slug:slug(name)
                })
                if(req.file){
                    product.image=req.file.path
                }
                const data = await product.save()
                return res.status(200).json({
                    meaage: "data added",
                    data: data
                })
            
        } catch (error) {
            console.log(error)
        }
    }


    async getdata(req, res) {
        try {
            const data = await ProductModel.find()
            return res.status(200).json({
                message: "data found",
                total: data.length,
                data: data
            })
        } catch (error) {
            console.log(error)
        }


    }

    async getdataById(req, res) {
        try {
            const id = req.params.id
            const data = await ProductModel.findById(id)
            if (data) {
                return  res.status(200).json({
                    message: "data found",
                    
                    data: data
                })
            } else {
                return res.status(404).json({
                    message: "data not found",

                })
            }

        } catch (error) {
            console.log(error)
        }

    }

    //get data by slug
    async gettdataBySlug(req, res) {
        try {
            const slug = req.params.slug
            const data = await ProductModel.find({ slug })
            return res.status(404).json({
                message: "data found",
                data: data

            })
        }catch (error) {
            console.log(error)
        }
    }



    async update(req, res) {
        try {
            const id = req.params.id
            const { name, price, description } = req.body
            const data = await ProductModel.findByIdAndUpdate(id, {
                name,
                price,
                description
            })
            if (data) {
                return  res.status(200).json({
                    message: "data updated",
                })
            } else {
                return res.status(404).json({
                    message: "data not found",

                })
            }

        } catch (error) {
            console.log(error)
        }
    }


    async delete(req, res) {
        try {
            const id = req.params.id
            const data = await ProductModel.findByIdAndDelete(id)
            if (data) {
                return res.status(200).json({
                    message: "data deleted",
                })
            } else {
                return res.status(404).json({
                    message: "data not found",
                })
            }

        } catch (err) {
            console.log(err);

        }
    }


async filterByName(req, res) {
        try {
           
            const data = await ProductModel.find({name:"green"})
            
            return res.status(200).json({
                message: "data found",
                data: data
            })
        } catch (error) {
            console.log(error)
        }

    }


    //pagination
    async pagination(req, res) {
        try {
            const page =parseInt(req.query.page) || 1
            const limit =5
            const totalData = await ProductModel.countDocuments()
            const totalpage = Math.ceil(totalData/limit)
            const nextpage=page < totalpage ? page+1 : null
            const prevpage=page > 1 ? page-1 : null

            const user=await ProductModel.find().skip((page-1)*limit).limit(limit)
            return res.status(200).json({
                success: true,
                msg: "data found",
                data:user,
                page,
                prevpage,
                nextpage,
                totalpage,
                totalData

            })
        }catch (error) {
           return res.status(404).json({
                success: false,
                message: "data not found",
            })
        }
    }  
    
    
    //search
    async search(req, res) {
        try {
            let query={}
            if(req.body.search){
                const search=req.body.search
                query={
                    //name:{$regex:search,$options:'i'}
                    $or:[
                        {name:{$regex:search,$options:'i'}},
                        {description:{$regex:search,$options:'i'}},
                    ]
                }
            }

            const user=await ProductModel.find(query)
            return res.status(200).json({
                success: true,
                msg: "data found",
                data:user

            })
        }catch (error) {
           return res.status(404).json({
                success: false,
                message: error.message,
            })
        }
    }

}    
module.exports = new apiController();