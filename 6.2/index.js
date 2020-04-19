const fs = require('fs');


// Asynchronous Form:
fs.readFile(__filename, (err, data) => {
  if (err) throw err;

  // do something with data
});


// Synchronous Form:
const data = fs.readFileSync(__filename);
// exceptions are immediately thrown
// if you don't want the errors to bubble up, you need to use a try/catch to handle them
// do something with data
// the readFile method return a buffer if a character enconding is not defined