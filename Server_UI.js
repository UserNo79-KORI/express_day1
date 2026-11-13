const express = require('express');
const path = require('path');
const app = express()

app.get( "/", (req,resp) =>{
    resp.sendFile(path.join(__dirname,"Views", "home.html"))
})

app.get( "/about", (req,resp) =>{
    resp.sendFile(path.join(__dirname,"Views", "about.html"))
})

app.get( "/error", (req,resp) =>{
    resp.sendFile(path.join(__dirname,"Views", "error.html"))
})

app.listen( 4000, () =>{
    console.log("Running...");
    
})