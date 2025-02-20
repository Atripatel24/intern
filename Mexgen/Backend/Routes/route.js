const express = require('express')
const { createuser } = require('../Controllers/userController')
const router = express.Router()

router.post('/create', createuser)


module.exports = router