let mongoose = require("mongoose")

let connection = async() =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Aditi")
        console.log("database connect successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports = connection

