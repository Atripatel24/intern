const mongoose = require("mongoose")

let connectionDB = async() =>{
    try{
      await  mongoose.connect("mongodb://localhost:27017/Jay&Harsh")
        console.log("db connected")
    }catch(err){
        console.log(err)
    }
}


module.exports = connectionDB