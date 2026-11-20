const mongoose = require('mongoose');
const express = require('express');
const { connectDB } = require('./db');

const empSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min:12900,
        required:true
    },
    dept:{
        type:String,
        enum:["IT","HR","SALES"],
        required:true
    }
},
    { timestamps:true}
)

const empModel = mongoose.model("emp",empSchema)

connectDB()

const app = express() 
app.use(express.json())   // to get data

// Read
// app.get("/",async (req,resp) => {
//     try {
//         const data = await empModel.find()
//         resp.json(data)
//     } catch (error) {
//         console.log(error);
//     }
// })

// Add
// app.post("/addData",async (req,resp) => {
//     try {
//         const{name,salary,dept} = req.body
//         const result = await empModel.create({name,salary,dept})
//         resp.json(result)
//     } catch (error) {
//         console.log(error);

//     }
// })

// Update
// app.patch("/update/:id",async (req,resp) => {
//     try {
//         const result = await empModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
//         resp.json(result)
//     } catch (error) {
//         console.log(error);
//     }
// })

// Delete
app.delete("/delete/:id", async (req,resp) => {
    try {
        const result = await empModel.findByIdAndDelete(req.params.id)
        resp.json(result)
    } catch (error) {
        console.log(error);
    }
})

app.listen(4000,()=>{
    console.log("Running");
    
})
