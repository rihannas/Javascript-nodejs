// The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
// With fs module we can do it asynchronously which is non-blocking,
// and synchronously which is blocking

// async file reading and writing

// for async method to work we need to provide a callback 
// readFile() takes in the path of the file to be read, then 
// takes the callback function with 2 arguments -> err & result

const { readFile, writeFile } = require('fs');

// if we dont add the encoding we get buffer
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    // saving the result to variable
    const first = result

    // reading the second file
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        // saving the result to variable
        const second = result

        // set up the writeFile, takes in path + content + callback
        writeFile(
            './content/result-async.txt',
            `Messages: ${first} and ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result); // the result from here will be 'undefined', because we dont expect anything
            }
        );
    });

});


// to write the ouput in a file we need to do it the readFile function that's--
// where the result is sitting. 