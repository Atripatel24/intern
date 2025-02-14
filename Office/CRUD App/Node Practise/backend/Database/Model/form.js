const mongoose = require('mongoose');

const schema = mongoose.schema({
    name:String,
    email:String,
    password:String
})

const user = mongoose.model('practise',schema)

module.exports = user