const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

let user = mongoose.model('User',userSchema)

module.exports = user