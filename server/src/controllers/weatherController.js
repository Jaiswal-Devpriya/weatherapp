class WeatherController {
    constructor(weatherService) {
        this.weatherService = weatherService;
    }

    async getWeather(req, res) {
        const { location } = req.query;
        if (!location) {
            return res.status(400).json({ error: 'Location is required' });
        }
        try {
            const weatherData = await this.weatherService.getWeather(location);
            return res.status(200).json(weatherData);
        } catch (error) {
            console.error("Error fetching weather:", error);
            return res.status(500).json({ error: 'Failed to fetch weather data' });
        }
    }
}

module.exports = WeatherController;