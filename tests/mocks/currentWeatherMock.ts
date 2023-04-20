import { ICurrentWeather } from '../../src/Interfaces/IWeatherAPI';

const currentWeather: ICurrentWeather = {
  coord: {
    lon: -43.2489,
    lat: -22.8512,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'nuvens dispersas',
      icon: '03n',
    },
  ],
  base: 'stations',
  main: {
    temp: 23.71,
    feels_like: 23.65,
    temp_min: 22.86,
    temp_max: 24.29,
    pressure: 1016,
    humidity: 58,
  },
  visibility: 10000,
  wind: {
    speed: 7.2,
    deg: 200,
  },
  clouds: {
    all: 40,
  },
  dt: 1682023721,
  sys: {
    type: 1,
    id: 8429,
    country: 'BR',
    sunrise: 1681981660,
    sunset: 1682022951,
  },
  timezone: -10800,
  id: 7538753,
  name: 'Vila Joaniza',
  cod: 200,
};

export default currentWeather;
