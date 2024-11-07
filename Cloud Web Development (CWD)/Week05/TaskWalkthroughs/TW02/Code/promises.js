function fetchWeatherByCity(city) {
    fetch(`https://api.weatherapi.com/v1/current.json?key={YOUR_API_KEY}&q=${city}`)
    .then(response => response.json())
    .then(data => {
        console.log(`Location: ${data.location.name}`);
        console.log(`Temperature: ${data.current.temp_c}°C`);
        console.log(`Condition: ${data.current.condition.text}`);
    })
    .catch(error => console.log(`We encountered an error while fetching the data.
        ${error}`))
}

fetchWeatherByCity('Cape Town');

