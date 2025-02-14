console.log("server")

const fs = require("fs")
const http = require("http")
const app = require("express")
const path = require("path")

console.log(path.dirname("index.js"))

const page = fs.readFileSync("./index.html")

const server = http.createServer((req,res)=>{
   res.end(page)
})

server.listen(3000,()=>{
    console.log("server running on 3000")
})
