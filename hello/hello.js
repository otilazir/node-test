var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello");
  response.end();
}).listen(8080);