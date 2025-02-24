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


let getAllUser = async(req,res) =>{
    try{

        let data = await User.find()

        res.send({
            message:" get All users",
            users : data
        })

    }catch(err){
        res.send({
            message:"cannot get user",
            data: err
        })
    }
}

let getUserById = async(req,res)=>{
    try{

        let id = req.params.id

        let userdata = await User.findById(id)

        res.send({
            message:" get one user",
            users : userdata
        })

    }catch(err){
        res.send({
            message:"cannot get user",
            data: err
        })
    }
}

let updateUser = async(req,res) =>{
    try{
        let id = req.params.id 

        let { name , email , password} = req.body

        let updatedata = await User.findByIdAndUpdate(id, {name , email, password})

        res.send({
            message:"update user ",
            data : updatedata
        })

    }catch(err){
        res.send({
            message:"error on update user",
            data : err
        })
    }
}

let deleteuser = async(req,res) =>{
    try{

        let id = req.params.id

        let deletedata = await User.findByIdAndDelete(id)
        
        res.send({
            message:` user delete ${id}`
        })

    }catch(err){
        res.send({
            message:"error on delete user",
            data : err
        })
    }
}

module.exports = { createuser , getAllUser ,getUserById , updateUser , deleteuser}