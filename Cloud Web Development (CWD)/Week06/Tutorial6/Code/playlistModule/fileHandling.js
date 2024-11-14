// Create a module of playlist functions which uses file handling
const fs = require('fs');

// Read in a playlist text file and count how many songs are in the playlist
function countSongs(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
    
        let playlist = data.split("\n");
        console.log(`This playlist contains ${playlist.length} songs.`)
        return playlist.length
    });
}


// Display all the songs in the playlist
function displaySongs(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
    
        console.log(data);
    });
}


// Compare two playlists


// Update a playlist
function addSong(path, song) {
    fs.appendFile(path, `\n${song}`, (err) => {
        if (err) throw err;
        console.log(`Successfully Added ${song}`);
    })
}

module.exports = [countSongs, displaySongs, addSong];
