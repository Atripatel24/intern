const mongoose = require("mongoose");

let connection = async() =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Krish")
        console.log("Database connected")
    }catch(err){    
        console.log(err)
    }
}

module.exports = connection