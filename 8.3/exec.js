const { exec } = require('child_process');

// By default, the spawn method does not create a shell to execute the command we passed into it, making it slightly more efficient than the exec method, which does create a shell. 
// The exec method has one other major difference. It buffers the command's generated output and pass the whole value to a callback function.
// Exec is a good choice if you need to use the shell syntax and the data returned from the command is not big, because exec will buffer the whole data before it returns it. 
exec('find . -type f | wc -l', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});
