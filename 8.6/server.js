const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for (let i = 0; i < 1e7; i++); // simulate CPU work
  res.end(`Handled by process ${pid}`); // indicate which intance of the application is actually handling the request
}).listen(8080, () => {
  console.log(`Started process ${pid}`);
});

// ab -c200 -t10 http://localhost:8080/
// Requests per second:    118.38 [#/sec]