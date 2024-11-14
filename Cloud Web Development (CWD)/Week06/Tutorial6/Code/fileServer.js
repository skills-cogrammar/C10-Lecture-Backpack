// Import http module
const http = require('http');
const fs = require('fs');

// Create our server
let server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // Read a file and add it to our response object
    fs.readFile("files/MovieSoundtrackPlaylist.txt", "utf8", (err, data) => {
        response.write(data);
        response.end();
    })
});

// Listen on our port
server.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

