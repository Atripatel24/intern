const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : String ,
    email : String ,
    password : String
},{timestamps : true})

const model = mongoose.model('auth',schema)

module.exports = model ;