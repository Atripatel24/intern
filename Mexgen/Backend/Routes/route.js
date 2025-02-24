const express = require('express')
const { createuser, getAllUser, getUserById, updateUser, deleteuser } = require('../Controllers/userController')
const router = express.Router()

router.post('/create', createuser)
router.get('/getalluser',getAllUser)
router.get('/getuser/:id',getUserById)
router.put('/updateuser/:id' , updateUser)
router.delete('/deleteuser/:id' , deleteuser)

module.exports = router