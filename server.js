var http = require('http');
var uc = require('upper-case');
var port = process.env.PORT || 8080;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
}).listen(port);
