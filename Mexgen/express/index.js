const express = require("express")

const app = express()

//  post - frontend to backend    create 
// get - backend to frontend      get
// put -                          update
// delete -                       delete


app.get('/',(req,res)=>{
    res.send(" get method")
})

app.get("/home",(req,res)=>{
    res.send("home page")
})

app.post("/post",(req,res)=>{

    let user = {name:"john" , id:1}

    res.send({
        message:" post ",
        data : user
    })
})

app.delete("/delete/:id",(req,res)=>{
    
    let id = req.params.id

    res.send(`delete data : ${id}`)
})


app.listen(4000,()=>{
    console.log('server run on 4000')
})