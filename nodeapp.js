const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
   if(req.url = '/json'){
       const data =  fs.readFileSync('./httpserver/api.json')
       res.end(data)
   }else{
       res.end('error')
   }
}).listen(80, ()=>{
    console.log('success')
})