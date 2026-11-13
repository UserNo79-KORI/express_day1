const express = require('express'); 
const app = express()
app.get("/", (req,resp) =>{
    resp.end("HOME...")
})

app.get("CONTACT", (req,resp) =>{
    resp.end("CONTACT...")
})

app.use( (req,resp) =>{
    resp.end("ERROR")
})

app.listen(4000, () =>{
    console.log("Running...");
    
})
