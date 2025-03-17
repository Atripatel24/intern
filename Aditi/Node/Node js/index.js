console.log("node file")

const express  = require("express")
const fs = require("fs")
const http = require("http")
const path = require("path")
const page  = fs.readFileSync("./index.html")

console.log(path.dirname("index.html"))

const server = http.createServer((req,res)=>{
    // res.end("server form http")
    res.end(page)
})

server.listen(3000,()=>{
    console.log("server run on port 3000")
})


// step in terminal

// npm init 

// run node (file name)

// npm i express nodemon

// nodemon filename




