// create folder
// open terminal
// npm init
// external modules install - npm i express 


const express = require("express")
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// post - create user
// get - get user
// put - update user
// delete - delete user


app.get('/getuser',(req,res)=>{

    res.send({
        success: true,
        message : 'get api success'
    })

})


app.post('/create',(req,res)=>{
    console.log(req.body)
    res.send({
         success: true,
        message : 'post api success'
    })
})

app.delete('/deleteuser/:id',(req,res)=>{

    console.log(req.params.id)

    res.send({
        message:`delete user ${req.params.id}`
    })

})

app.put('/update/:id',(req,res)=>{

    res.send({
        message:`update user ${req.params.id}`,
        data : req.body
    })
})





app.listen(3000,()=>{
    console.log('server run on 3000')
})

