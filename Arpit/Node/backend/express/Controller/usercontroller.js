const user = require("../Model/form")


let createUser = async(req,res)=>{

    try{

        const { name , email , password } = req.body

        let newuser = new user({
            // name:req.body.name,
            name,
            email,
            password
        })

       let data = await newuser.save()

       res.send({
        success:true,
        message:"create user "
       })

        

    }catch(err){
        console.log(err)
        res.send({
            success:false,
            message:"error user "
           })
    
    }

}

module.exports = {createUser}