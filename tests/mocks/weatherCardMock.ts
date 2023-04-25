import { IWeather } from '../../src/Interfaces/IWeatherAPI';

const weatherMock: IWeather = {
  dt: 1682877600,
  main: {
    temp: 25.17,
    feels_like: 25.54,
    temp_min: 25.17,
    temp_max: 25.17,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 1012,
    humidity: 69,
    temp_kf: 0,
  },
  weather: [
    {
      id: 500,
      main: 'Rain',
      description: 'chuva leve',
      icon: '10d',
    },
  ],
  clouds: {
    all: 19,
  },
  wind: {
    speed: 3.53,
    deg: 119,
    gust: 3.61,
  },
  visibility: 10000,
  pop: 0.34,
  rain: {
    '3h': 0.1,
  },
  sys: {
    pod: 'd',
  },
  dt_txt: '2023-04-30 18:00:00',
};

export default weatherMock;
