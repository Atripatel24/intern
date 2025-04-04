let User = require("../Models/userSchema")
let bcrypt = require("bcryptjs")

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

let register = async(req,res) =>{
    try{

        let { name , email , password } =  req.body

        let exist = await User.findOne({email})
        if (exist) throw "user already exist..!"

        let newpassword = await bcrypt.hash(password , 10)

        let newuser = new User({
            name,
            email,
            password : newpassword
        })

        await newuser.save()

        res.send({
            message:"user create success",
            data: newuser
        })


    }catch(err){
        res.send({
            message : "error on registration ! ",
            data: err
        })
    }
}


let login = async(req,res) => {
    try{

        let { email , password } = req.body

        let loginuser = await User.findOne({email})
        if(!loginuser) throw "Invalid email"

        let loginpassword = await bcrypt.compare(password , loginuser.password)
            //                                   ( krish123 , $2b$10$3g... )
        if (!loginpassword) throw "Invalid password "

        let userwithoutpassword = loginuser.toObject()
        delete userwithoutpassword.password

        res.send({
            message:"Login success",
            data: userwithoutpassword
        })

    }catch(err){
        res.send({
            message: "Invalid credentials",
            data:err
        })
    }
}


const loginmiddleware = async(req,res) => {
    try{

        let { password } = req.body.password

        let loginpassword = await bcrypt.compare(password , loginuser.password)
            //                                   ( krish123 , $2b$10$3g... )
        if (!loginpassword) throw "Invalid password "

        let userwithoutpassword = loginuser.toObject()
        delete userwithoutpassword.password

        res.send({
            message:"Login success",
            data: userwithoutpassword
        })

    }catch(err){
        res.send({
            message: "Invalid credentials",
            data:err
        })
    }
}

let checkeamil = async(req,res,next) => {
    try{

        let email = req.body.email

         let loginuser = await User.findOne({email})
        if(!loginuser) throw "Invalid email"

        next()

    }catch(err){
        res.send(err)
    }
}


const jwt = require("jsonwebtoken")

let tokengenerate = async(req,res) => {

    try{

        let { email , password } = req.body

        let loginuser = await User.findOne({email})
        if(!loginuser) throw "Invalid email"

        let loginpassword = await bcrypt.compare(password , loginuser.password)
        if (!loginpassword) throw "Invalid password "

        if(loginuser && loginpassword){

            let token = jwt.sign({id:loginuser._id},"iamdevloper",{expiresIn:"1m"})
            res.cookie("token",token, {httpOnly:true})
            
            res.send({
                message:"Login success",
                token
            })
        }

       

    }catch(err){
        console.log(err)
        res.send({
            message: "Invalid credentials",
            data:err
        })
    }

} 


let verifytoken = async(req,res,next) => {
    try{
        console.log(req.cookies.token)
        let token = req.cookies.token

        let user_data = jwt.verify(token,"iamdevloper")

        if(!user_data) throw "Invalid token"

        let loginuser = await User.findById(user_data.id)

        req.user = loginuser

        next()


    }catch(err){
        res.send({message:err})
    }
}

let userDetail = async(req,res) => {
    let data = req.user

    res.send({
        user: data
    })
}


let imageupload = async(req,res)=>{
    try{
        
        console.log(req.body)
        console.log(req.file)

        const { name , email , password } = req.body 
        
        let newuser = new User({
            name,
            email,
            password,
            profile : req.file.filename
        })

        await newuser.save()

        res.send({
            success:true,
            message: 'new user create successfully'
        })
    }catch(err){
        res.send({message:err})
    }
}


let cloudupload = async(req,res)=>{
    try{
        
        // console.log(req.body)
        // console.log(req.file)

        const { name , email , password } = req.body 
        console.log(req.body)
        console.log(req.file)
        
        let newuser = new User({
            name,
            email,
            password,
            profile : req.file.path
        })

        await newuser.save()

        res.send({
            success:true,
            message: 'new user create successfully'
        })
    }catch(err){
        res.send({message:err})
    }
}



module.exports = { createuser , getAllUser ,getUserById , updateUser , deleteuser , register , login , loginmiddleware , checkeamil , tokengenerate , verifytoken , userDetail , imageupload ,cloudupload}