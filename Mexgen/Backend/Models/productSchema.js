const mongoose = require("mongoose")

let productSchema = mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    userId:String
})

let product = mongoose.model('product',productSchema)

module.exports = product