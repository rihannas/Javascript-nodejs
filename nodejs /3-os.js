// The os module provides operating system-related utility methods and properties.
// to import something specific do const {something} = require('os');
// this import the whole module
const os = require('os');

// info about current user of the operating system
const user = os.userInfo();
console.log(user);

// method return the system uptime (running) in sec
const time = os.uptime();
console.log(`The running time is ${time}`);

// an object that has info about the current os
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemo: os.totalmem(),
    freeMemo: os.freemem(),
}

console.log(currentOs);
