// The HTTP module creates an HTTP server that listens to server ports and gives a response back to the client. 
// http module allows nodejs to connect to http servers and clients--
// and and transfer data over the Hyper Text Transfer Protocol (HTTP).

const http = require('http');

// we create server
// the http.createServer takes in a callback function that has 2 arguments
// request/req: the incoming request from a client 
// response/res: the response given from the server to the incoming request
// this type of req and res functions take time that's why they are async
 const server = http.createServer((req, res) => {
    // we have methods for req and res

    // res.write just prints text the browser
    res.write('Welcome to our home page');
    res.end();
 });


// you need to choose a port the server will be listening too.
server.listen(5500)





// Note: we run this file, it doesn't exist. It keeps on running because--
// server keep on listeing to incoming requests. Plus
// In any case also want our servers to be running 24/7

// Note: an example of a request is someone searching something up in the browser or--
// even refreshing the page is a request.