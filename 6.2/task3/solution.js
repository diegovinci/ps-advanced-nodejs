const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const currentFiles = fs.readdirSync(dirname); // read the name of the files in the directory to be watched

const logWithTime = (message) =>
  console.log(`${new Date().toUTCString()}: ${message}`);

// start the watch listener
fs.watch(dirname, (eventType, filename) => {
  
  if (eventType === 'rename') { // if the event type is 'rename', it means the file is added or deleted from the directory
    const index = currentFiles.indexOf(filename);
    if (index >= 0) { // if the file exists in the currentFiles array it means the event is a remove event
      currentFiles.splice(index, 1); // update the currentFile to remove the file
      logWithTime(`${filename} was removed`);
      return;
    }
    
    // if we get to this point, it means a file is being added
    currentFiles.push(filename); // update the currentFiles array to contain the new file
    logWithTime(`${filename} was added`);
    return;
  }

  // if the event type is not 'rename', the other event type supported in this listener is the 'change' event
  logWithTime(`${filename} was changed`);
});
