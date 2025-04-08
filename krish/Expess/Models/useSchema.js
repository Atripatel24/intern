const mongoose = require("mongoose");

let schema = mongoose.Schema({
    name: String,
    email:String,
    password:String,
})

let user = mongoose.model("user",schema)

module.exports = user;