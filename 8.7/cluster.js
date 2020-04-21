const cluster = require('cluster');
const os = require('os');

// **** Mock DB Call
const numberOfUsersInDB = function () {
  this.count = this.count || 5;
  this.count = this.count * this.count;
  return this.count;
}
// ****

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  const updateWorkers = () => {
    const usersCount = numberOfUsersInDB();
    Object.values(cluster.workers).forEach(worker => {
      worker.send({ usersCount }); // broadcast message to the workers
    });
  };

  // Every 10 seconds, all workers will receive the new users count over the process communication channel.
  updateWorkers();
  setInterval(updateWorkers, 10000);

} else {
  require('./server');
}
