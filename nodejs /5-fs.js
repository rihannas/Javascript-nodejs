// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
// With fs module we can do it asynchronously which is non-blocking,
// and synchronously which is blocking

const { readFileSync, writeFileSync } = require('fs')