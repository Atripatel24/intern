console.log("index file from Node");

const http = require("http")
const fs = require("fs")
const path = require("path")

console.log(path.basename("index.html")) 

let server  = http.createServer((req,res)=>{
    // res.end("Respone from node application")
    res.end(fs.readFileSync("index.html"))
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})