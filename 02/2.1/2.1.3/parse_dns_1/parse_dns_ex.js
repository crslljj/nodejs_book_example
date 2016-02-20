var http = require('http'),
    dns = require('dns'),
    fs = require('fs'),
    url = require('url'),
    querystring = require("querystring");

http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
  req.setEncoding("utf8");
  res.writeHead(200, {'Content-Type':'text/html'});
  router(res, req, pathname);
}).listen(3000, "127.0.0.1");

console.log('running node server: http://127.0.0.1:3000');

function router(res, req, pathname) {
  switch(pathname) {
    case "/parse":
      parseDns(res, req)
    break;
    default:
      goIndex(res, req);
  }
}
