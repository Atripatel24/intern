let express = require('express')
let cors = require('cors')
require('./config/conn')
let userRoute = require('./route/userRoute')

let app = express();

app.use(express.json());
app.use(cors());

// for api calling
app.use('/api/user',userRoute)


app.listen(4000 , ()=>{
    console.log('server running on 4000');
})