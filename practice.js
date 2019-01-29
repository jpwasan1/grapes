var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Context-Type':'text/plain'});
    res.end('how r u wasan');
}).listen(process.env.PORT,process.env.IP);
console.log('server is running');node 
