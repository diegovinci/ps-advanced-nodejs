const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }
  console.log(`Master PID: ${process.pid}`);

  // When a worker crashes, fork a new one 
  cluster.on('exit', (worker, code, signal) => { // add a condition the make sure the worker crashed intead of manually disconected
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed. ` +
        'Starting a new worker...');
      cluster.fork();
    }
  });

  // In case of a redeploy, restart workers only when another is ready
  process.on('SIGUSR2', () => {
    const workers = Object.values(cluster.workers);

    const restartWorker = (workerIndex) => {
      const worker = workers[workerIndex];
      if (!worker) return;

      worker.on('exit', () => {
        if (!worker.exitedAfterDisconnect) return;
        console.log(`Exited process ${worker.process.pid}`);
        cluster.fork().on('listening', () => {
          restartWorker(workerIndex + 1);
        });
      });

      worker.disconnect();
    };

    restartWorker(0);
  });

} else {
  require('./server');
}

// node cluster.js
// ab -c200 -t10 http://localhost:8080/
// kill -SIGUSR2 9603
// zero failed requests despite the workers were restarted