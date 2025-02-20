let User = require("../Models/userSchema")
let createuser = async(req,res) =>{
    try{

        const { name , email , password } = req.body 

        let newuser = new User({
            name,
            email,
            password
        })

        await newuser.save()

        res.send({
            success:true,
            message: 'new user create successfully'
        })

    }catch(error){
        console.log(error)
        res.send({
            success:false,
            message: error
        })
    }

}

module.exports = { createuser }