// lib/weatherService.js
const apiKey = '2d8fc73cb104dcc1b79a88b5723d0fe7';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  const response = await fetch(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  return data;
};
