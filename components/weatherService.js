import axios from 'axios';

const API_KEY = '1635890035cbba097fd5c26c8ea672a1';  // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeatherByCity = async (cityName) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
    
    // Filter to get the first forecast record for each day (e.g., the record around 12:00 PM)
    const forecastData = response.data.list.filter(item => item.dt_txt.includes('12:00:00'));
    
    return forecastData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
