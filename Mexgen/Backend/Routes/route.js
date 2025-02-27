const express = require('express')
const { createuser, getAllUser, getUserById, updateUser, deleteuser, register, login, loginmiddleware, checkeamil } = require('../Controllers/userController')
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


module.exports = router