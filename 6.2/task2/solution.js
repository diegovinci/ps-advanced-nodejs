/*
TASK 2:
Script to clean old files in a directory.
Anything older than 7 days should be deleted.
 */

const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);
const ms1Day = 24 * 60 * 60 * 1000;

files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (err, stats) => {
    if (err) throw err;

    // Get the files that was not modified in the last 7 days - stats.mtime
    if ((Date.now() - stats.mtime.getTime() > 7 * ms1Day)) {
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`deleted ${filePath}`);
      });
    }
  });
});

// As the result file7, file8, file9 are deleted.