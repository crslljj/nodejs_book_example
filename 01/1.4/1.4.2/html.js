var http = require('http');
http.createServer(function(req,res) {
  var retHtml = "<html><head><title>Node.js</title></head><body><div>Hi Node, I like you so much</div></body></html>"
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end(retHtml);
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337');
