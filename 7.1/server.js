const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // In the first example, the big.file has 1M lines and more than 400mb:
  // fs.readFile copied the entire file to the memory making node process to have more than 400mb in a few seconds.
  // In the second example, the big.file has 5m lines and 2.2GB:
  // fs.readFile returned an exception saying that the file size is greater than buffer limit.

  // fs.readFile('./big.file', (err, data) => {
  //   if (err) throw err;
  //   res.end(data);
  // });

  // fs.createReadStream read the file as a stream of data, one chunck at a time, optimizing the memory allocation. 
  // In the first example, node process consumed progressively 40mb of memory to read the ./big.file.
  // In the second example, node process consumed almost the same amount of memory (45mb) to read the file despite this one being 5x bigger.

  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8000);

// curl localhost:8000