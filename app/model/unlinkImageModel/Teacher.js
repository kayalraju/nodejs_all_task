const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
   
   image: {
        type: String,
        default:"aaaaa"  
    },
    
},
{
    timestamps: true
}
);

const teacherModel = mongoose.model('teacher', productSchema);

module.exports = teacherModel;