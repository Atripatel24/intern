// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// _____________________________________________________________________________________________


// create own serve

const http = require('http');
const fs = require('fs')

const hostname = 'localhost';
const port = 3000 ;
const page = fs.readFileSync('./index.html')

const server = http.createServer((req,res)=>{

  // if(req.url === '/'){
  //   res.end(`<h1>Home Page</h1>`)
  // }
  // else if(req.url === '/about'){
  //   res.end("<h1>About Page</h1>")
  // }
  // else{
  //   res.end("<h1>404 Page Not Found</h1>")
  // }

  res.end(page)

})

server.listen(port,hostname,()=>{
  console.log(`server running on ${hostname}:${port}`);
})