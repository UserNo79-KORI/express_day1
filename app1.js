const express = require('express');
const path = require('path');
const app = express()

// Middleware
app.use(express.urlencoded({extended:true}))

app.get("/", (req,resp) =>{
    resp.sendFile(path.join(__dirname,"Views","form.html"))
})

app.post("/formData",(req,resp) =>{
    const data = req.body
    console.log(data);
    resp.end(data)
    
})

app.listen(4000,()=>{
    console.log("Running");
    
})