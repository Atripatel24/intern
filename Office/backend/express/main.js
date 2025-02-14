const express = require('express')
const app = express()
const port = 3000
const route = require('./route')

// app.use(express.static("public"))
app.use(route)

// app.get('/', (req, res) => {
//     console.log('get is working..');
//   res.send('Hello World!!')
// })

// app.post('/', (req, res) => {
//     console.log('post is working..');
//     res.send('hello post method')
// })

// get page 

app.get('/', (req, res) => {
    console.log('Index Page')
    res.sendFile('page.html' , {root:__dirname})
})

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})