const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    image:String
})

let user = mongoose.model("user",userSchema)

module.exports = user