const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    // const sum = longComputation();
    // return res.end(`Sum is ${sum}`);
    const compute = fork('compute.js');
    compute.on('message', sum => {
      console.timeEnd('request-time');
      res.end(`Sum is ${sum}`);
    });
  } else {
    res.end('Ok')
  }
});

server.listen(3000);
// curl localhost:3000/compute
