const express = require("express")

const http = require("http")
const fs = require("fs")
const path = require("path")

const page = fs.readFileSync("./index.html")

console.log(path.basename("index.html"))

const server = http.createServer((req,res)=>{
    res.end(page)
})

server.listen(5000,()=>{
    console.log("server running on port 5000")
})
