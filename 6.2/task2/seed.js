const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

fs.mkdirSync(dirname);
const ms1Day = 24 * 60 * 60 * 1000;

for (let i = 0; i < 10; i++) {
  const filePath = path.join(dirname, `file${i}`);
  // Creating 10 files to test the script solution
  fs.writeFile(filePath, i, (err) => {
    if (err) throw err;

    const time = (Date.now() - i * ms1Day) / 1000;
    // Changing the timestamp. filePath, time: access time, time: modified time
    fs.utimes(filePath, time, time, (err) => {
      if (err) throw err;
    });
  });
}

// As the result these files is created in files directory
// file0
// file1
// file2
// file3
// file4
// file5
// file6
// file7
// file8
// file9
// file10