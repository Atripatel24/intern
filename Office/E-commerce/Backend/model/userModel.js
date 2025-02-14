let mongoose = require('mongoose')

let userschema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    profile:String
},{timestamps : true})

let user = mongoose.model('users',userschema)

module.exports = user