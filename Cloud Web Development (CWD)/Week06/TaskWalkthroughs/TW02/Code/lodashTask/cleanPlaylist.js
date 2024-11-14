const lodash = require('lodash');

// Array with my songs
let playlist = [
    "Sticky - Tyler the Creator", 
    "Everything is romantic - Charli XCX",
    "Adam - Amine",
    "Sticky - Tyler the Creator",
    "Baby - Those Guys from Athens",
    "Everything is romantic - Charli XCX",
    "Adam - Amine"
];

// Display the original playlist
console.log(`This is your original playlist: 
    ${playlist}`);


// Use lodash to filter out song repeats 
let uniquePlaylist = lodash.uniq(playlist);

// Display the new playlist and the number of songs in it
console.log(`This is your duplicate-free playlist: 
    ${uniquePlaylist}`);
console.log(`Your new playlist has ${uniquePlaylist.length} songs in it.`);
console.log(`We have removed ${playlist.length - uniquePlaylist.length} duplicates.`);