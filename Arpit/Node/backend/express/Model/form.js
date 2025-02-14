const mongoose = require("mongoose")

const userschema = mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const user = mongoose.model("crud",userschema)

module.exports = user