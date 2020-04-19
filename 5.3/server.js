// server: the server object is from the http.Server class 
const server = require('http').createServer();

server.on('request', (req, res) => {
  // req: the request object inside the request listener is from the http.IncomingMessage class
  // res: the response object is from the http.ServerResponse class

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world\n');
});

server.listen(8000);
