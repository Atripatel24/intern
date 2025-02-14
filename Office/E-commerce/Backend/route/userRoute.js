let express = require('express')
let { register , login}  = require('../controller/userControler')
let {upload} = require('../config/cloudinary')

let router = express.Router();

router.post('/register',upload.single('profile'),register)
router.post('/login',login)



module.exports = router