const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const multiimageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
    images: {
        type: [String]
    }
},

    {  timestamps: true }
)

const multiimageModel = mongoose.model('multiimae', multiimageSchema)
module.exports = multiimageModel;