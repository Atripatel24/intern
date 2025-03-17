const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    res.send("express app")
})

app.get("/home",(req,res)=>{
    res.send("home page")
})

app.listen(5000,()=>{
    console.log(" server run on 5000")
})