const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/employees").then(()=>{
    console.log("connection sucessfull");
}).catch((err)=>{
    console.log(err)
})

const student = mongoose.Schema({
    name:String,
    email:String
})

 const Student = mongoose.model('students',student)

const adder = async() => {
    const sd = new Student({
        name:"Kaushik",
        email:"kaushik@gmail.com"
    })
  await sd.save()
}

adder();