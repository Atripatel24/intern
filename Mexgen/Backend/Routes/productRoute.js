let express = require("express")
const { createproduct, getProductByUserId } = require("../Controllers/productController")
let router = express.Router()

router.post("/createproduct",createproduct)
router.get("/getproduct/:id", getProductByUserId )

module.exports = router