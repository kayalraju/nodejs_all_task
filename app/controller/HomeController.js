

const path = require('path')
const fs = require('fs');
const { ProductModel } = require('../model/product');
class HomeController {



    async home(req, res) {
        try {
            const alldata = await ProductModel.find()
            //console.log('ee',alldata);
            
            const massage=req.flash('massage')
            res.render('home', {
                title: "home page",
                massage,
                data: alldata
            })

        } catch (err) {
            console.log(err);

        }
    }

    async product(req, res) {
        try {
            res.render('addProduct', {
                title: "product page",
            })
        } catch (err) {
            console.log(err);

        }
    }






    async creatreproduct(req, res) {
        try {
            const { name, price, description } = req.body
            const product = new ProductModel({
                name,
                price,
                description
            })
            if(req.file){
                product.image=req.file.path
            }
            const data = await product.save()
            //console.log('dtaa', data);

            if (data) {
                req.flash('massage',"Product added successfully")
                res.redirect('/')
            } else {
                req.flash('error',"Product not added ")
                res.redirect('/product')
            }

        } catch (err) {
            console.log(err);

        }
    }


    async edit(req, res) {
        try {
            const id = req.params.id
            const data = await ProductModel.findById(id)
            res.render('edit', {
                title: "edit page",
                data: data
            })
        } catch (err) {
            console.log(err);

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
                res.redirect('/')
            } else {
                res.redirect('/edit/product/' + id)
            }
        } catch (err) {
            console.log(err);

        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id
            const data = await ProductModel.findByIdAndDelete(id)
            if (data) {
                res.redirect('/')
            } 
        } catch (err) {
            console.log(err);
        }
    }
}


module.exports = new HomeController()