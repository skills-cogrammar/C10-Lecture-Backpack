async function fetchRandomQuote() {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        var data = await response.json();

        console.log(`Quote: "${data.quote}"`);
        console.log(`- ${data.author}`);
    } catch (error) {
        console.log(`We encountered an error while fetching the data.
        ${error}`)
    }
}

fetchRandomQuote();