const fs = require('fs');

// console.log() // writes to stdout
// console.info() // alias to console.log()
// console.warn() //alias to console.error()
// console.error() // behave exactly like console.log() but writes to stderr
// console.trace('here') // behave like console.error() but also prints the callstack at the point where it is placed
// console.assert(3 === '3') // perform simple assertions
// console.time('here'); console.timeEnd('here') // return the duration of the operations between the two commands 

const out = fs.createWriteStream('./out.log');
const err = fs.createWriteStream('./err.log');

const console2 = new console.Console(out, err);

// writes to ./out.log or ./err.log files every 5 seconds
setInterval(function () {
  console2.log(new Date());
  console2.error(new Error('Whoops'));
}, 5000);

// **********************

const util = require('util');
const debuglog = util.debuglog('web');

const server = require('http').createServer();

server.on('request', (req, res) => {
  debuglog('HTTP Request: %s', req.url);
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello world\n');
});

server.listen(8000);

// **********************

const util = require('util');

module.exports.puts = util.deprecate(function() {
  for (var i = 0, len = arguments.length; i < len; ++i) {
    process.stdout.write(arguments[i] + '\n');
  }
}, 'puts: Use console.log instead');

// **********************

const util = require('util');
const EventEmitter = require('events');

// ***** The old way
function CustomEmitter() {}

util.inherits(CustomEmitter, EventEmitter);

CustomEmitter.prototype.write = function(data) {
  this.emit('data', data);
};
// *****

// ***** The new way
class CustomEmitter extends EventEmitter {
  constructor() {
    super();
  }
  write(data) {
    this.emit('data', data);
  }
}
// *****

const stream = new CustomEmitter();
