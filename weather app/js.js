
const apiKey = 'b132df1013478a7e6084f8d60afd0e31'; // Replace 'YOUR_API_KEY' with your actual API key
const weatherUrl = 'https://home.openweathermap.org/api_keys';

const weatherDiv = document.getElementById('weather');
const locationForm = document.getElementById('locationForm');
const locationInput = document.getElementById('locationInput');

locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = locationInput.value;
    getWeatherData(location);
});

async function getWeatherData(location) {
    try {
        const response = await fetch(`${weatherUrl}?q=${location}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const weatherInfo = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        weatherDiv.innerHTML = weatherInfo;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherDiv.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
    }
}
