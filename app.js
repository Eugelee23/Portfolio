document.getElementById('search-btn').addEventListener('click', function () {
    const cityName = document.getElementById('search-input').value;
    getWeather(cityName);
});

function getWeather(cityName) {
    const apiKey = 'd214a7af8a5013527408eeb2015f4b0f';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            displayWeatherError(error);
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');
    if (data.cod !== 200) {
        weatherDisplay.innerHTML = `Error: ${data.message}`;
        return;
    }

    const { main, weather, name } = data;
    weatherDisplay.innerHTML = `
        <p><strong>${name}</strong></p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Weather: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}

function displayWeatherError(error) {
    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `Error fetching weather data: ${error.message}`;
}
fetch(url)
    .then(response => {
        if (!response.ok) {
            // Logging more details about the response
            console.error(`HTTP error! Status: ${response.status}, Message: ${response.statusText}`);
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        displayWeatherError(error);
    });
