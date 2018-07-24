import axios from 'axios';

const API_KEY = '7682102190f17b5aad1a84abdb18db30';
const API_URL = 'https://api.openweathermap.org/data/2.5/forecast'

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const request = axios({
    method: 'GET',
    url: API_URL,
    params: {
      appid: API_KEY,
      q: city
    }
  });

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
