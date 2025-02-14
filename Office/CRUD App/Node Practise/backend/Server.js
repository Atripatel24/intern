const express = require('express');
const cors = require('cors');
const connectionDB = require('./Database/db')

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

connectionDB();

app.listen(port ,()=>{
    console.log(`server running on port ${port}`);
})