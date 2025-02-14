const mongoose = require('mongoose');

const connectionDB = async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/CRUD')
        console.log('database connected');
    }
    catch (err){
        console.log(err);
    }
}

module.exports = connectionDB;