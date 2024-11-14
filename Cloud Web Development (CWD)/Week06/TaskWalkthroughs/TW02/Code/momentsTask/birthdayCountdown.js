const moment = require('moment');

// Create an array of Event objects 
// Each event must have a name and a date in YYYY-MM-DD format
let events = [
    {name: "Zahra's Birthday", date: "2025-11-13"},
    {name: "Our last lecture together", date: "2024-12-24"},
    {name: "Anon's Birthday", date: "2025-09-21"}
];

// Calculate the countdown for each event using a function
function calculateCountdown (events) {
    events.forEach(event => {
        const now = moment();
        const eventDate = moment(event.date);
        const daysUntilEvent = eventDate.diff(now, 'days');

        console.log(`${daysUntilEvent} days left until ${event.name}!`);
    });
}

// Call the function
calculateCountdown(events);