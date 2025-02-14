const express = require('express')
const router = express.Router()

let userController = require('./api')
router.use(userController)

module.exports = router 