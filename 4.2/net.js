const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
  socket.id = counter++;
  sockets[socket.id] = socket;

  console.log('Client connected');
  socket.write('Welcome new client!\n');

  socket.on('data', data => {
    // On data from any socket, we loop over this socket objects and write the received data to every socket in there.
    Object.entries(sockets).forEach(([, cs]) => {
      cs.write(`${socket.id}: `);
      cs.write(data);
    });
  });

  socket.on('end', () => {
    // Delete the socket to prevent the application from crashing when a client disconnects from the server.
    delete sockets[socket.id];
    console.log('Client disconnected');
  });
});

server.listen(8000, () => console.log('Server bound'));
// For testing purposes, telnet or netcat can be used multiple times. Eg: nc localhost 8000