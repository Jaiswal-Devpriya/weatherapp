const express = require('express');
const WeatherController = require('../controllers/weatherController');
const WeatherService = require('../services/weatherService');
const router = express.Router();

const weatherService = new WeatherService();
const weatherController = new WeatherController(weatherService);

router.get('/weather', weatherController.getWeather.bind(weatherController));

module.exports = router;