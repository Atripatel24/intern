const User = require("../Models/useSchema")

let createUser = async(req,res)=>{
    try{
        
        let { name , email , password } = req.body;

        let newuser = new User({
            name,
            email,
            password,
        }) 

        await newuser.save();

        res.send({
            success:true,
            message:"User Created Successfully",
            data:newuser
        })

    }catch(err){
        res.send(err)
    }
}

let getAllUser = async(req,res)=>{
    try{
        
        let data = await User.find();

        res.send({
            success:true,
            message:"User Fetched Successfully",
            data:data
        })

    }catch(err){
        res.send(err)
    }
}

let getUserById = async(req,res)=>{
    try{
        
        let id = req.params.id;

        let data = await User.findById(id);

        res.send({
            success:true,
            message:"User Fetched Successfully",
            data:data
        })

    }catch(err){
        res.send(err)
    }
}

let jwt = require("jsonwebtoken")

let createToken = async(req,res) => {
    try{

        let { email , password } = req.body

        let existEmail = await User.findOne({email})
        if(!existEmail) throw "Invalid Email"

        let existpassword = await User.findOne({password})
        if(!existpassword) throw "Invalid Password"

        let token = await jwt.sign({id:existEmail._id} , "iamdev")

        res.cookie("token",token)

        res.send({
            success:true,
            data: token
        })


    }
    catch(err){
        console.log(err)
        res.send({
            success:false,
            data: err.message
        })
    }
}


let verifyToken = async (req,res,next) => {
    try{

    let token = req.cookies.token

    // console.log(req.cookies)

    let verifyData = await jwt.verify(token,"iamdev")

     req.user = verifyData

     next();

    }catch(err){
        console.log(err)
        res.send({
            success:false,
            data: err.message
        })
    }
}

let getUser = async(req,res)=>{
    try{
        
        let id = req.user.id;
        console.log(id)

        let data = await User.findById(id);

        res.send({
            success:true,
            message:"User Fetched Successfully",
            data:data
        })

    }catch(err){
        res.send(err)
    }
}

module.exports = { createUser , getAllUser , getUserById , createToken , verifyToken , getUser}