// Create an array of Event objects 
// Each event must have a name and a date in YYYY-MM-DD format
let events = [
    {name: "Zahra's Birthday", date: "2025-11-13"}
];

// Calculate the countdown for each event using a function
function calculateCountdown (events) {
    events.array.forEach(event => {
        const now = moment();
        const eventDate = moment(event.date);
        const daysUntilEvent = eventDate.diff(now, 'days');

        console.log(`${daysUntilEvent} left until ${event.name}!`);
    });
}

// Call the function