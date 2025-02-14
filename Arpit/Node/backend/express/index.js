const express = require("express")
const app = express()
const cors = require("cors")
const connectiondb = require("./Connection/db")
const router = require("./Route/route")

app.use(cors())
app.use(express.json())
app.use(router)

connectiondb()


// app.get('/get',(req,res)=>{
//     let user = { name:"john", id:1}
//     res.send({
//         success: true,
//         data:user,
//         message:"get api work"
//     })
// })

// app.post("/create",(req,res)=>{
//     // req.body
//     console.log(req.body)
//     res.send({
//         success: true,
//         message:"user create successfully"
//     })
// })


// app.put(`/update/:id`,(req,res)=>{

//     console.log(req.params.id)
//     res.send({
//         success:true,
//         user_id: req.params.id,
//         message:"update success"
//     })
// })


app.listen(8080,()=>{
    console.log("app running on 8080")
})