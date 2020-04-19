/*
TASK 1:
Script to fix files in a directory.
Each file has its data duplicated.
Truncate each file in half.
*/

const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
console.log("dirname", dirname); // /home/user-name/projects/project-subfolder/ps-nodejs-advanced/6.2/task1/files

const files = fs.readdirSync(dirname);
console.log("files", files); // [ 'http.js', 'https.js', 'index.js', 'index2.js', 'net.js' ]

files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (err, stats) => {
    console.log("stats", stats); // { ..., size: 726, ...}

    if (err) throw err;
    fs.truncate(filePath, stats.size / 2, (err) => {
      if (err) throw err;
    });
  });
});
