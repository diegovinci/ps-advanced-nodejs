const { spawn } = require('child_process');

const child = spawn('wc'); // Child process invokes the wc command, which counts lines, words and characters in Linux 

process.stdin.pipe(child.stdin) // Pipe a readable stream (stdin) into a writable one (child process stdin)

child.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});

// After run the script, type some input and press ctrl + D to see the result
// Ex: Hello there
// child stdout: 
// 1       2      12
// 1 line, 2 words and 12 characters 