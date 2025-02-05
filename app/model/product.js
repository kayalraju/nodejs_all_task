const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

//validation schema
 const ProductSchemaValidate = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    price:Joi.number(),    
    // email: Joi.string().required()
    //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','in'] } }),
   
})

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
   image: {
        type: String,
        default:"aaaaa"  
    },
    slug: {
        type: String,
       lowercase: true
    }

},
{
    timestamps: true
}
);

const ProductModel = mongoose.model('product', productSchema);

module.exports = {ProductModel,ProductSchemaValidate};