let users = require('../model/userModel')
let bcrypt = require('bcryptjs')

let register = async (req, res) => {
    try {
        let { name, email, password } = req.body
        let { file } = req.file

        let exist = await users.findOne({ email })
        if (exist) throw 'user already exist !'

        let hashpassword = await bcrypt.hash(password, 10)

        let user = new users({
            name,
            email,
            password: hashpassword,
            profile: file.path
        })

        let result = await user.save()

        if (!result) throw 'Database Error'

        res.send({
            success: true,
            message: 'User create successfully'
        })


    } catch (err) {
        res.send({
            success: false,
            message: err
        })
    }
}


let login = async (req,res) =>{
    try{

        let { email , password } = req.body
        let user = await users.findOne({ email })
        if( !user ) throw 'Invalid Email ID '

        let isvalid = bcrypt.compare(password , user.password)
        if( !isvalid ) throw 'Invalid Password '

        // user without password 

        let userdetail = user.toObject()
        delete userdetail.password
        
        res.send({
            success : true ,
            message : 'Login successfully' ,
            user : userdetail
        })

    }catch (err) {
        res.send({ success : false , message : err })
    }
}



module.exports = { register , login}