const express = require('express');

const app = express()

app.set("view engine","ejs")
app.get("/",(req,resp)=>{
    const data = 1000
    resp.render("home",{data})
})

app.get("/add",(req,resp)=>{
    const data = 10+20
    resp.render("add",{data})
})

app.get("/product",(req,resp)=>{
    const data = [
        {id:1,name:"TV",price:12900},
        {id:2,name:"PC",price:12900},
        {id:3,name:"Mouse",price:12900},
        {id:4,name:"KeyBoard",price:12900},
        {id:5,name:"CPU",price:12900},
    ]
    resp.render("product",{data})
})
app.listen(3000,()=>{
    console.log("Running...");
    
})