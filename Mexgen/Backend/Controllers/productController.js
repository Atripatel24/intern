let  Product = require("../Models/productSchema")


let createproduct = async(req,res) => {
    try{

        let { name , desc , price , userId } = req.body

        let product = new Product({
            name,
            desc,
            price,
            userId
        })

        await product.save()

        res.send({
            success: true,
            message : "product create successfully",
            data: product
        })

    }catch(err){
        res.send({
            success: false,
            message : err
        })
    }
}

let getProductByUserId = async(req,res)=>{
    try{

        let userId = req.params.id

        console.log(userId)

        let productdata = await Product.findOne({userId})

        if(!productdata) throw "Product is not available"

        res.send({
            data: productdata
        })

    }catch(err){
        res.send({
            success: false,
            message : err
        })
    }
}

module.exports = {createproduct , getProductByUserId}