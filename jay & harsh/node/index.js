const fs = require("fs")
const express = require("express")
const http = require("http")
const path = require("path")

const page = fs.readFileSync("./index.html")

console.log(path.dirname("index.js"))

const server = http.createServer((req,res)=>{
    res.end(page)
})

server.listen(4000,()=>{
    console.log("server running on 4000")
    console.log("nodemon")
})
