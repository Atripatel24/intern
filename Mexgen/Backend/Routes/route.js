const express = require('express')
const { createuser, getAllUser, getUserById } = require('../Controllers/userController')
const router = express.Router()

router.post('/create', createuser)
router.get('/getalluser',getAllUser)
router.get('/getuser/:id',getUserById)


module.exports = router