const express = require('express');
const app = express()

// Middleware
app.use(express.json())

app.get("/", (req,resp)=>{
    resp.end("HOME...")
})

app.post("/data", (req,resp)=>{
    const result = req.body
    console.log(result);
    resp.json(result)
})

app.listen(4000,() =>{
    console.log("Running...");
    
})

// Code didnt Run on Request
