const mongoose=require('mongoose');
const Schema=mongoose.Schema

const EmployeeSchema= new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    department:{
        name:{
            type:String,
            required:true
        }
    }
})

const employeeModel=mongoose.model("Employee",EmployeeSchema)
module.exports=employeeModel