const mongoose = require("mongoose")

const connectionDB = async() =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Arpit")
        console.log("db connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectionDB