const express = require('express')
const { createuser, getAllUser, getUserById, updateUser, deleteuser, register, login, loginmiddleware, checkeamil, tokengenerate, verifytoken, userDetail, imageupload, cloudupload } = require('../Controllers/userController')
const router = express.Router()

router.post('/create', createuser)
router.get('/getalluser', getAllUser)
router.get('/getuser/:id', getUserById)
router.put('/updateuser/:id', updateUser)
router.delete('/deleteuser/:id', deleteuser)

router.post('/register', register)
router.post('/login', login)

router.post('/middleware', (req, res, next) => {
    try {
        let name = req.body.name
        if (name === "Rohan") {
            next()
        } else {
            res.send("Invalid name")
        }
    } catch (err) {
        res.send(err)
    }

}, (req, res) => {   
    res.send("login Rohan")
})

router.post("/loginmiddleware",checkeamil,loginmiddleware)

// token

router.post("/tokengenetare", tokengenerate)

let cookieparser = require('cookie-parser')
router.use(cookieparser())

router.get('/verifytoken', verifytoken , userDetail)


// image 

// const upload = require("../Connection/multer")

// router.post("/imagetest", upload.single('profile') ,imageupload) 

let { upload }= require("../Connection/cloudinary")

router.post("/cloudninary", upload.single("profile") , cloudupload)


module.exports = router