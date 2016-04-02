var http = require('http');
http.createServer(function(req, res){
res.writeHead(200, {'content-type': 'text/plain'})
res.end('Version - ' + process.version);
}).listen(process.env.port || 3000)