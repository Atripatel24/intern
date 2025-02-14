const express = require("express")
const { createUser, getAllUser, getUserById, deleteuser, updateuser, register, loginuser, middleware, newhandler, tokengenerate, imageHandler } = require("../Controllers/userController")
const router = express.Router()

// let user = require("../Model/userSchema")

router.post("/create", createUser)
router.get("/getuser", getAllUser)
router.get("/oneuser/:id",getUserById)
router.delete("/deleteuser/:id",deleteuser)
router.put("/updateuser/:id",updateuser)

router.post("/register",register)
router.post("/login",loginuser)


// router.post("/login", middleware,newhandler)

// router.post("/middle",async(req,res,next)=>{

//     let { email , password } = req.body

//     let loginuser = await user.findOne({email})
//     if(!loginuser) throw "Invalid Email"

//     next()

// } , async(req,res)=>{

//     console.log("password middleware")
//     //  let valid = await bcrypt.compare(password,loginuser.password)
//     //         if(!valid) throw "Invalid Password"
// })

const jwt = require("jsonwebtoken")
const cookieparser = require("cookie-parser")
const user = require("../Model/userSchema")

router.use(cookieparser())

router.post("/createtoken", tokengenerate)

let verifytoken = async(req,res,next)=>{
    try{
        console.log(req.cookies)
        let token = req.cookies.token

        let data = jwt.verify(token,"iamdevloper")
        if(!data) throw "Invalid token"
    
        let loginuser = await user.findById(data.id) 
        req.user = loginuser

        next()
        
    }catch(error){
        console.log(error)
    res.send({
        message: error,
    })
    }
}

router.get("/verify",verifytoken, async(req,res)=>{

    let userdetail = req.user

    res.send({
        data:userdetail
    })

})

// image

// const upload = require("../Middleware/multer")
const { upload } = require("../Middleware/cloudnary")


// router.post("/image",upload.single("image"),imageHandler)

// router.post("/multiimage",upload.fields([{name:"profile",maxCount:1},{name:"proof",maxCount:1}]),imageHandler)

router.post("/cloudimage",upload.single("image"),imageHandler)


module.exports = router