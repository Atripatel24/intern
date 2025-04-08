const express = require("express")
const cors = require("cors")
const connectionDB = require("./Connection/db")
const router = require("./Routes/userRoute")

const app = express()

app.use(cors());
app.use(express.json());
app.use(router)

connectionDB()


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

