const express = require('express')
const cors = require('cors')
const connectionDB = require("./Connection/db")
const route = require("./Routes/route")
const product = require("./Routes/productRoute")

const app = express()

app.use(cors())
app.use(express.json())
app.use(route)
app.use(product)

connectionDB()


// app.get('/getuser',(req,res)=>{
//     res.send({
//         success:true,
//         message:'get user success'
//     })
// })

// app.post('/create',(req,res)=>{
//     console.log(req.body)
//     res.send({
//         success:true,
//         message:'post user success'
//     })
// })

// app.delete('/deleteuser/:id',(req,res)=>{
//     res.send({
//         message:`delete user ${req.params.id}`
//     })
// })

// app.put('/update/:id',(req,res)=>{
//     res.send({
//         message:`update user ${req.params.id}`,
//         data:req.body
//     })
// })




app.listen(3000,()=>{
    console.log('server run on 3000')
})