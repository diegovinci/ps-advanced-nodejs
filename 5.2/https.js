const fs = require('fs');
const server = require('https')
  .createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
  });

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello world\n');
});

server.listen(443); // 443: default port for https communication

// For testing purposes, "openssl" comand line tool was used in the terminal to generate a private key and a certificate. 
// Eg: openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
// To run the application on port 443 is required to call sudo on a debian based OS. 
// Eg: sudo /home/{user}/.nvm/versions/node/v8.16.0/bin/node https
// And finally, access: https://localhost:443