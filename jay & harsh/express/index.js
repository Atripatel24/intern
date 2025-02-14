const express = require("express")
const cors = require("cors")
const route = require("./Route/userRoute")
const dbconnection = require("./Connection/db")
const cookieparser = require("cookie-parser")

const app = express()


app.use(cors())
app.use(express.json())
app.use(route)
app.use(cookieparser())

dbconnection()

// app.get("/about",(req,res)=>{
//     res.send("hello")
// })


// app.post("/create",(req,res)=>{
//     console.log(req.body)
//     let data = req.body

//     res.send({
//         status:200,
//         message:"success",
//         user: data
//     })
// })

// app.put('/update/:id',(req,res)=>{

// console.log(req.params.id)
// console.log(req.body)
//     res.send({
//         status:200,
//         message:"success"
//     })
// })


app.listen(5000,()=>{
    console.log("express run on 5000")
})