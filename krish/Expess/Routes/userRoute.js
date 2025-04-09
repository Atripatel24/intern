const express = require("express");
const { createUser, getAllUser, getUserById, createToken, verifyToken, getUser, imageHandler } = require("../Controllers/userController");
const router = express.Router();

let cookieparser = require("cookie-parser")

router.use(cookieparser())

router.post("/create", createUser )
router.get("/users", getAllUser)
router.get("/user/:id" , getUserById)

router.post('/login', createToken)
router.get('/verify', verifyToken , getUser)

let upload = require("../Connection/multer")

router.post('/image', upload.array("image", 3) ,imageHandler)





module.exports = router;