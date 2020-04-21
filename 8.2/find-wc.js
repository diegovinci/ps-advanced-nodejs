const { spawn } = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin); // pipe outputs of 2 child processes to count the number of files in the current directory

wc.stdout.on('data', (data) => {
  console.log(`Number of files ${data}`);
});
