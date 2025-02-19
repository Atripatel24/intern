const express = require("express")
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

//  post - frontend to backend    create 
// get - backend to frontend      get
// put -                          update
// delete -                       delete


// app.get('/',(req,res)=>{
//     res.send(" get method")
// })

// app.get("/home",(req,res)=>{
//     res.send("home page")
// })

// app.post("/post",(req,res)=>{

//     let user = {name:"john" , id:1}

//     res.send({
//         message:" post ",
//         data : user
//     })
// })

// app.delete("/delete/:id",(req,res)=>{
    
//     let id = req.params.id

//     res.send(`delete data : ${id}`)
// })


app.post('/create',(req,res)=>{

        console.log(req.body)

    res.send({
        success:true,
        message:"user create success !",
        data: req.body
    })

})

app.get('/getuser',(req,res)=>{

    res.send({
        message:" get user "
    })

})

app.put('/updateuser/:id',(req,res)=>{
    
    console.log(req.body)

    res.send({
        message:`update user ${req.params.id}`,
        data: req.body
    })

})


app.delete('/deleteuser/:id',(req,res)=>{
    res.send({
        message:`delete user ${req.params.id}`
    })
})





app.listen(3000,()=>{
    console.log('server run on 4000')
})