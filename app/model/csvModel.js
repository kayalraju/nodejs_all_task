const mongoose = require('mongoose');


const csvSchema = mongoose.Schema({
    name: {
        type: String,
      
    },
    email: {
        type: String,
       
    },
    mobile: {
        type: Number,

    }
});

module.exports = mongoose.model('csvuser', csvSchema)