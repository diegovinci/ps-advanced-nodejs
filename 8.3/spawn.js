const { spawn } = require('child_process');

// The spawn function is a much better choice than exec when the data returned from the command is big, because that data will be streamed with the standard I/O object and we can actually make the child process inherit the standard io objects of its parents if we want to. 

// Shell mode
// const child = spawn('find . -type f', {
//   stdio: 'inherit',
//   shell: true
// });

// Different cwd
// const child = spawn('find . -type f | wc -l', {
//   stdio: 'inherit',
//   shell: true,
//   cwd: '/Users/samer/Downloads'
// });

// Custom env
const child = spawn('echo $ANSWER', {
  stdio: 'inherit',
  shell: true,
  env: { ANSWER: 42 },
});
