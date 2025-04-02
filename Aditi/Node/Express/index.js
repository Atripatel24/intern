const express = require("express")
const cors = require("cors")
const connectionDB = require("./Connections/database")
const user = require("./Models/userSchema")

let app = express()

app.use(cors())
app.use(express.json())

connectionDB()

// app.get("/",(req,res)=>{
//     res.send("get response from server")
// })

// app.post("/create",(req,res)=>{
//     console.log(req.body)
//     // res.send(req)
// })

// app.delete('/delete/:id',(req,res)=>{
//     let id = req.params.id
//     res.send(id)
// })

// app.put("/update/:id",(req,res)=>{
//     let id = req.params.id
//     res.send({
//         message: "update successfully",
//         data: req.body
//     })
// })

app.post('/createuser', async (req,res)=>{
    try{

    // console.log(req.body)

    let { name , email , password } = req.body

    let newuser = new user({
        // name: req.body.name,
        // email: req.body.email,
        // password: req.body.password

        name,
        email,
        password
    })

    await newuser.save()

    res.send({
        success:true,
        message:"new user create successfully",
        data: newuser
    })



    }catch(err){
        res.send(err)
    }
})


app.listen(5000,()=>{
    console.log("server run on 5000")
})

// npm i mongoose
// create connection folder 
// inside connection folder create file
// create foldet models for schema 
// create schema file inside model folder
// create post api