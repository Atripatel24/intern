const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CRUD').then(()=>{
    console.log("connection sucessfull");
}).catch((err)=>{
    console.log(err)
})