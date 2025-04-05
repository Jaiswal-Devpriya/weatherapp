const API_BASE_URL = 'http://localhost:5001/api';

export const fetchWeatherData = async (location) => {
    const url = `/api/weather?location=${location}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to fetch data from server');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data from server:', error);
        throw error;
    }
};
