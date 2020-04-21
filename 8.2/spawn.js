const { spawn } = require('child_process');

// The spawn method launches a command in a new process and we can use it to pass that command any arguments.
// The result is a child process instance which implements the node EventEmitter API, this means we can register handlers for events on this child object directly.
// const child = spawn('pwd');

const child = spawn('find', ['asd', '-type', 'f']);

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`child stderr:\n${data}`);
});

child.on('exit', function (code, signal) {
  console.log(`child process exited with code ${code}, signal ${signal}`);
});

// other events on child: 
// - disconnect: is triggered when the parent process manually calls the child disconnect method
// - error: is triggered if the process could not be spawned or killed
// - message: the most important one, it is triggered when the child process uses the process.send() method to send messages. This is how parent/child processes can communicate with each other
// - close: is emmited when the stdio streams of child process get closed.

// Every child process have 3 standard io streams/objects: child.stdin, child.stdout, child.stderr
