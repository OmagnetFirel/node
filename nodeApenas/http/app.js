var http = require('http');

http.createServer(function(req, res){
    res.end("Hello world , wellcome to my site");
}).listen(8081);

console.log('listening on port 8081');