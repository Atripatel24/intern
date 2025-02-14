const express = require("express")
const { createUser } = require("../Controller/usercontroller")
const router = express.Router()


router.get("/",(req,res)=>{
    
    res.send({
        success:true,
        message: "get successfull"
    })
})

router.post("/create", createUser)





module.exports = router