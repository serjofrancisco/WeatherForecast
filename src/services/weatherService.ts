const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const BASE_URL_CURRENT = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeatherFromAPI(lat: number, lon: number) {
  // lat = latitude, lon = longitude, cnt = number of days, appid = API key, lang = language
  const URL = `${BASE_URL}?lat=${lat}&lon=${lon}&cnt=40&lang=pt_br&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function getCurrentWeatherFromAPI(lat: number, lon: number) {
  // lat = latitude, lon = longitude, cnt = number of days, appid = API key, lang = language
  const URL = `${BASE_URL_CURRENT}?lat=${lat}&lon=${lon}&lang=pt_br&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

function getWeatherIconURL(icon: string) {
  return `http://openweathermap.org/img/wn/${icon}.png`;
}

export { getWeatherFromAPI, getWeatherIconURL, getCurrentWeatherFromAPI };

// API documentation: https://openweathermap.org/
