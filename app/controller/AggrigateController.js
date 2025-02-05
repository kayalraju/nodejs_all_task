const CategoryModel=require('../model/category')

class AggrigateController {

async createProduct(req,res){
    try{
        const category = await CategoryModel.create(req.body)
        res.status(200).json({
            success:true,
            category
        })

    }catch(err){
        console.log(err);
        
    }

}

}

module.exports = new AggrigateController()