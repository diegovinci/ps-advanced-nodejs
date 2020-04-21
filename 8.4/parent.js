const { fork } = require('child_process');

const forked = fork('child.js');

forked.on('message', (msg) => { // subscribe to message event from the child
  console.log('Message from child', msg);
});

forked.send({ hello: 'world' }); // send message to the child process
