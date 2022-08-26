// The path module provides utilities for working with file and directory paths.
const path = require('path');

// return platform seperator 
console.log(path.sep) // you dont add the brackets if you are calling it from the console.log

// joins paths using the platform seperator and returns a path as a string
// the dir and file names are passed as arguments

const filePath = path.join('/content','subfolder','text.txt')
console.log(filePath);

// return the basename from a path
const baseName = path.basename(filePath);
console.log(baseName);

// return an absolute path 
// path.reslove accepts segments of paths like dirs and files and resolves them.
// __dir is global variable that constains path to current dir
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);

//why would we want to use an abolsute path? 
// We use it because when the program is running it uses--
// the path of that local machine and not have to stick to a spcific path to work