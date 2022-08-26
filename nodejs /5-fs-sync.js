// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
// With fs module we can do it asynchronously which is non-blocking,
// and synchronously which is blocking

// sync file reading and writing

const { readFileSync, writeFileSync } = require('fs');

// readFileSync()takes in the path of the file we want to read and add also the endcoding
const first = readFileSync('./content/first.txt', 'utf-8');
console.log(first);
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(second);

// writeFileSync() first takes the path of the file the write output will be , then
// you can add the text you want to be added or variables that contain text
//  writeFileSync() by default is on write mode, which over writes, 
// but we want to append only we need to add a flag which appends

writeFileSync(
    './content/result-sync.txt',
    `Message from first: ${first}, Message from second: ${second}. End of message`,
    { flag: 'a'});