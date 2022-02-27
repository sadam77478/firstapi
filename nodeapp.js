const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
   if(req.url = '/json'){
       const data =  fs.readFileSync('./httpserver/api.json')
       const obj = JSON.parse(data)
       res.end(obj[1].title)
   }else{
       res.end('error')
   }
}).listen(process.env.PORT || 80, ()=>{
    console.log('success')
})