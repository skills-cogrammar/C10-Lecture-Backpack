// Import http module
const http = require('http');

// Create our server
let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello World!");
});

// Listen on our port
server.listen(3000, () => {
    console.log("Server is running on port 3000.");
});