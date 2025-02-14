const express = require('express');
const cors = require('cors')
require('./conn')
const users = require('./model')
const bcrypt = require('bcryptjs');
const upload = require('./multer');
const jwt = require("jsonwebtoken")
const cookieparser = require('cookie-parser')

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieparser())


app.post('/register', upload.single('profile'), async (req, res) => {

    console.log(req.file);


    try {
        let { email, name, password } = req.body
        let exist = await users.findOne({ email })

        if (exist) throw 'user already exist'

        let hashedPassword = await bcrypt.hash(password, 10)

        let user = new users({
            name,
            email,
            password: hashedPassword,
            profile: req.file
        })

        let result = await user.save();

        res.send({
            message: 'User created successfully',
            success: true,
        })

    } catch (e) {
        res.send({ message: e, success: false })
    }
})


app.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body

        let User = await users.findOne({ email })
        if (!User) throw 'Invalid Email Address!'

        let isValid = await bcrypt.compare(password, User.password)
        if (!isValid) throw 'Invalid Password'

        let newUserWithoutPassword = User.toObject()
        delete newUserWithoutPassword.password
        res.send({
            message: 'Login Successfull',
            success: true,
            user: newUserWithoutPassword
        })
    } catch (e) {
        res.send({ success: false, message: e })
    }
})

app.post('/middleware', (req, res, next) => {
    let name = req.body.name;
    if (name === 'Atri') {
        next();
    } else {
        res.send('invalid name');

    }
}, (req, res) => {

    res.send('welcome user !')

})


// jwt token

app.post('/token', async (req, res) => {
    try {
        let { email, password } = req.body

        let User = await users.findOne({ email })
        if (!User) throw 'Invalid Email Address!'

        let isValid = await bcrypt.compare(password, User.password)
        if (!isValid) throw 'Invalid Password'

        if (User && isValid) {
            let token = jwt.sign({ id: User._id }, 'iamatri', { expiresIn: '1m' })

            res.cookie('token', token, { httpOnly: true })

            res.send({
                message: 'Login Successfull',
                success: true,
                token
            })
        }
        else {
            res.send({
                message: "invalid credentials",
                success: false
            })
        }
    } catch (e) {
        res.send({ success: false, message: e })
    }
})

let varifyuser = async(req,res,next) =>{
    try{
        console.log("2")
        let token = req.cookies.token
        let details = jwt.verify(token,'iamatri')
        let user = await users.findById(details.id)
        if(!user) throw 'invalid token'
        req.user = user
        next()
    }catch(e){
        res.send({success:false,message:e})
    }
}

app.get('/verify',varifyuser,async(req,res)=>{
    console.log("object")
    let user = req.user
    res.send(user)
})

app.listen(3000, () => {
    console.log(`server running on 3000`)
})