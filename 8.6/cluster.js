const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
} else {
  require('./server');
}

// Each process has its own eventloop and memory space
// ab -c200 -t10 http://localhost:8080/
// Requests per second:    464.68 [#/sec]