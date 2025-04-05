import React, { useState } from 'react';
import { fetchWeatherData } from './utils/api';

function App() {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setLocation(event.target.value);
    };

    const handleFetchWeather = async () => {
        setError(null);
        setWeather(null);
        try {
            const data = await fetchWeatherData(location);
            setWeather(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Real-Time Weather Updates</h1>
            <input
                type="text"
                value={location}
                onChange={handleInputChange}
                placeholder="Enter city"
            />
            <button onClick={handleFetchWeather}>Get Weather</button>

            {weather && (
                <div>
                    <h2>{weather.city}, {weather.country}</h2>
                    <p>Temperature: {weather.temperature}°C</p>
                    <p>Condition: {weather.description}</p>
                </div>
            )}
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default App;