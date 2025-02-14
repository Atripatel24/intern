const user = require("../Model/userSchema")
const bcrypt = require("bcryptjs")

let createUser = async(req,res)=>{

    try{
    
    const {name , email,password} =  req.body

    let newuser = new user({
        name,
        email,
        password
    })

    await newuser.save()

    res.send({
        success:true,
        message:"user create success",
        data:newuser
    })

    }catch(error){
        console.log(error)
        res.send({
            success:false,
            message:"getting error on create ",
            data:error
        })
    }

}

let getAllUser = async(req,res) =>{
    try{

        let data = await user.find()

        res.send({
            success:true,
            message:"get all data success",
            data:data
        })

    }catch(err){
        console.log(err)
        res.send({
            success:false,
            message:"erron on getting all user ",
            data:err
        })
    }
}

let getUserById = async(req,res) =>{
    try{

        let id = req.params.id
        console.log(id)

        let oneuser = await user.findById(id)

        if(!oneuser) throw "user not found"

        res.send({
            success:true,
            message:"getting one user ",
            data:oneuser
        })

    }catch(err){
        console.log(err)
        res.send({
            success:false,
            message:"getting error on perticular user ",
            data:err
        })
    }
}

let deleteuser = async(req,res) =>{
    try{

        let id = req.params.id

        let deletedata = await user.findByIdAndDelete(id)

        res.send({
            success:true,
            message:"delete user",
            data : id
        })

    }catch(error){
        res.send({
            success:false,
            data:error
        })
    }
}

let updateuser = async(req,res)=>{
    try{

        let id = req.params.id

        let {name , email , password } = req.body

        let updateuser = await user.findByIdAndUpdate(id, {name,email ,password})

        res.send({
            success:true,
            message:"update ",
            data:updateuser
        })

    }catch(error){
        res.send({
            data:error
        })
    }
}


let register = async(req,res) =>{
    try{
    
        const {name , email,password} =  req.body

        let exist = await user.findOne({email})
        if(exist) throw "User Already Exist"

        let newpassword = await bcrypt.hash(password,10)
    
        let newuser = new user({
            name,
            email,
            password : newpassword
        })
    
        await newuser.save()
    
        res.send({
            success:true,
            message:"user create success",
            data: newuser
        })
    
        }catch(error){
            console.log(error)
            res.send({
                success:false,
                message:"getting error on create ",
                data:error
            })
        }
    
}


let loginuser = async(req,res) =>{

    try{

        let { email , password } = req.body

        let loginuser = await user.findOne({email})
        if(!loginuser) throw "Invalid Email"

        let valid = await bcrypt.compare(password,loginuser.password)
        if(!valid){
            res.send({
                message:"password not match"
            })
        } 

        let userwithoutpassword = loginuser.toObject()
        delete loginuser.password

        console.log(userwithoutpassword)

        
        res.send({
            success:true,
            message:"login successfull",
            data: userwithoutpassword
        })

    }catch(err){
        console.log(err)
        res.send({
            success:false,
            message:"getting error on create ",
            data:err
        })
    }

}

let middleware = async(req,res,next) =>{
    try{

        next()
    }catch(err){
        res.send({
            message:err
        })
    }
}

let newhandler = async(req,res) =>{

}

const jwt = require("jsonwebtoken")

let tokengenerate = async(req,res) =>{
    try{

        let { email , password } = req.body

        let loginuser = await user.findOne({email})
        if(!loginuser) throw "Invalid Email"

        let valid = await bcrypt.compare(password,loginuser.password)
        if(!valid) throw "Invalid password"

        if(loginuser && valid){

            let token = jwt.sign({id:loginuser._id},"iamdevloper",{expiresIn:"1m"})

            res.cookie("token", token , {httpOnly:true})

            res.send({
                message:"login success",
                token
            })

        }else{
            res.send("Invalid credentials")
        }



    }catch(err){
        res.send({
            success:false,
            message: err
        })
    }
}


let imageHandler = async(req,res) =>{
    try{

        console.log(req.file)

        let {name} = req.body

        let {image} = req.file

        
        let newuser = new user({
            name,
           image:req.file.filename
        })
    
        await newuser.save()
    
        res.send({
            success:true,
            message:"user create success",
            data: newuser
        })

    }catch(err){
        res.send({
            success:false,
            data:err
        })
    }
}


let cloudHandler = async(req,res) =>{
    try{

        console.log(req.file)

        let {name} = req.body

        let {image} = req.file

        
        // let newuser = new user({
        //     name,
        //    image:req.file.filename
        // })
    
        // await newuser.save()
    
        res.send({
            success:true,
            message:"user create success",
            data: newuser
        })

    }catch(err){
        console.log(err)
        res.send({
            success:false,
            data:err
        })
    }
}



module.exports = { createUser , getAllUser , getUserById , deleteuser , updateuser , register , loginuser , middleware , newhandler , tokengenerate , imageHandler} 