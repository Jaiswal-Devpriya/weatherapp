const axios = require('axios');
const API_KEY = '25ad5a37b90755a75052fdd2886d8329'; // Replace with your API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

class WeatherService {
    async getWeather(city) {
        try {
            const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            return this.processResponse(response.data);
        } catch (error) {
            throw new Error('Error fetching weather data: ' + error.message);
        }
    }

    processResponse(data) {
        return {
            temperature: data.main.temp,
            description: data.weather[0].description,
            city: data.name,
            country: data.sys.country,
        };
    }
}

module.exports = WeatherService;