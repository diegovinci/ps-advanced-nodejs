const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  // res.end signals to the server that all of the response headers and body have been sent
  // res.end('Hello world\n');
  res.write('Hello world\n');

  setTimeout(function () {
    res.write('Another Hello world\n');
  }, 10000);

  setTimeout(function () {
    res.write('Yet Another Hello world\n');
  }, 20000);

  setTimeout(function () {
    res.write('Ain\'t gonna happen\n');
  }, 130000); // after default server timeout which is 2 minutes
});

// We can control the server timeout by using the property timeout with the number of milliseconds of inactivity before a socket is presumed to have timed out.
// server.timeout = 1000;

server.listen(8000);

// For testing purposes: curl localhost:8000 or curl -i localhost:8000