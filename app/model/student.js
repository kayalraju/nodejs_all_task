const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

//validation schema
 const StudentSchemaValidate = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
      
     email: Joi.string().required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','in'] } }),
   
})

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

const Strunet = mongoose.model('student1', productSchema);

module.exports={
    StudentSchemaValidate,
    Strunet
}