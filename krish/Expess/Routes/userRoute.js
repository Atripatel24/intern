const express = require("express");
const { createUser, getAllUser, getUserById, createToken, verifyToken, getUser } = require("../Controllers/userController");
const router = express.Router();

let cookieparser = require("cookie-parser")

router.use(cookieparser())

router.post("/create", createUser )
router.get("/users", getAllUser)
router.get("/user/:id" , getUserById)

router.post('/login', createToken)
router.get('/verify', verifyToken , getUser)








module.exports = router;