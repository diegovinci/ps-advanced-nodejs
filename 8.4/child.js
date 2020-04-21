process.on('message', (msg) => { // subscribe to message event from the parent
  console.log('Message from parent:', msg);
});

let counter = 0;

setInterval(() => {
  process.send({ counter: counter++ }); // send message to the parent process
}, 1000);
