const mongodb = require('mongodb');
const { default: mongoose } = require('mongoose');

const empSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        salary:{
            type:Number,
            min:12900,
            max:56000,
            required:true
        },
        dept:{
            type:String,
            enum:["IT","SALES","HR"],
            required:true
        }
    },
    {timestamps:true}
)

const empModel = mongoose.model("emp",empSchema)

module.exports = empModel