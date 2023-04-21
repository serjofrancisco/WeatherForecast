import { IContext } from '../../src/Interfaces/IContext';

const contextMock: IContext = {
  position: {
    latitude: -22.85126523556606,
    longitude: -43.249056320673645,
  },
  weather: {
    cod: '200',
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1682046000,
        main: {
          temp: 23.67,
          feels_like: 23.74,
          temp_min: 21.15,
          temp_max: 23.67,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1016,
          humidity: 63,
          temp_kf: 2.52,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04n',
          },
        ],
        clouds: {
          all: 75,
        },
        wind: {
          speed: 1.76,
          deg: 252,
          gust: 3.09,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-21 03:00:00',
      },
      {
        dt: 1682056800,
        main: {
          temp: 22.36,
          feels_like: 22.43,
          temp_min: 19.74,
          temp_max: 22.36,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1016,
          humidity: 68,
          temp_kf: 2.62,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'chuva leve',
            icon: '10n',
          },
        ],
        clouds: {
          all: 76,
        },
        wind: {
          speed: 1.74,
          deg: 255,
          gust: 2.39,
        },
        visibility: 10000,
        pop: 0.2,
        rain: {
          '3h': 0.33,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-21 06:00:00',
      },
      {
        dt: 1682067600,
        main: {
          temp: 20.31,
          feels_like: 20.38,
          temp_min: 18.63,
          temp_max: 20.31,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 76,
          temp_kf: 1.68,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'nuvens dispersas',
            icon: '03n',
          },
        ],
        clouds: {
          all: 47,
        },
        wind: {
          speed: 1.62,
          deg: 289,
          gust: 1.91,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-21 09:00:00',
      },
      {
        dt: 1682078400,
        main: {
          temp: 21.99,
          feels_like: 22.02,
          temp_min: 21.99,
          temp_max: 21.99,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'algumas nuvens',
            icon: '02d',
          },
        ],
        clouds: {
          all: 17,
        },
        wind: {
          speed: 0.65,
          deg: 277,
          gust: 1.22,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-21 12:00:00',
      },
      {
        dt: 1682089200,
        main: {
          temp: 24.48,
          feels_like: 24.34,
          temp_min: 24.48,
          temp_max: 24.48,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1017,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'algumas nuvens',
            icon: '02d',
          },
        ],
        clouds: {
          all: 13,
        },
        wind: {
          speed: 1.54,
          deg: 154,
          gust: 1.62,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-21 15:00:00',
      },
      {
        dt: 1682100000,
        main: {
          temp: 24.07,
          feels_like: 23.89,
          temp_min: 24.07,
          temp_max: 24.07,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1015,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01d',
          },
        ],
        clouds: {
          all: 10,
        },
        wind: {
          speed: 2.56,
          deg: 151,
          gust: 2.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-21 18:00:00',
      },
      {
        dt: 1682110800,
        main: {
          temp: 20.97,
          feels_like: 20.79,
          temp_min: 20.97,
          temp_max: 20.97,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01n',
          },
        ],
        clouds: {
          all: 3,
        },
        wind: {
          speed: 1.67,
          deg: 139,
          gust: 3.26,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-21 21:00:00',
      },
      {
        dt: 1682121600,
        main: {
          temp: 20.45,
          feels_like: 20.38,
          temp_min: 20.45,
          temp_max: 20.45,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1018,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'algumas nuvens',
            icon: '02n',
          },
        ],
        clouds: {
          all: 17,
        },
        wind: {
          speed: 1.05,
          deg: 68,
          gust: 1.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-22 00:00:00',
      },
      {
        dt: 1682132400,
        main: {
          temp: 19.76,
          feels_like: 19.78,
          temp_min: 19.76,
          temp_max: 19.76,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'algumas nuvens',
            icon: '02n',
          },
        ],
        clouds: {
          all: 16,
        },
        wind: {
          speed: 1.11,
          deg: 25,
          gust: 1.2,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-22 03:00:00',
      },
      {
        dt: 1682143200,
        main: {
          temp: 18.74,
          feels_like: 18.76,
          temp_min: 18.74,
          temp_max: 18.74,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1015,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01n',
          },
        ],
        clouds: {
          all: 8,
        },
        wind: {
          speed: 1.27,
          deg: 18,
          gust: 1.35,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-22 06:00:00',
      },
      {
        dt: 1682154000,
        main: {
          temp: 18.13,
          feels_like: 18.19,
          temp_min: 18.13,
          temp_max: 18.13,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01n',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.24,
          deg: 359,
          gust: 1.47,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-22 09:00:00',
      },
      {
        dt: 1682164800,
        main: {
          temp: 22.02,
          feels_like: 22.11,
          temp_min: 22.02,
          temp_max: 22.02,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1018,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 0.36,
          deg: 22,
          gust: 0.99,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-22 12:00:00',
      },
      {
        dt: 1682175600,
        main: {
          temp: 24.74,
          feels_like: 24.89,
          temp_min: 24.74,
          temp_max: 24.74,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01d',
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 2.1,
          deg: 127,
          gust: 2.67,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-22 15:00:00',
      },
      {
        dt: 1682186400,
        main: {
          temp: 24.73,
          feels_like: 25.01,
          temp_min: 24.73,
          temp_max: 24.73,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1014,
          humidity: 67,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01d',
          },
        ],
        clouds: {
          all: 6,
        },
        wind: {
          speed: 3.19,
          deg: 124,
          gust: 3.1,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-22 18:00:00',
      },
      {
        dt: 1682197200,
        main: {
          temp: 22.03,
          feels_like: 22.43,
          temp_min: 22.03,
          temp_max: 22.03,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1015,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'chuva leve',
            icon: '10n',
          },
        ],
        clouds: {
          all: 12,
        },
        wind: {
          speed: 2.39,
          deg: 104,
          gust: 3.98,
        },
        visibility: 10000,
        pop: 0.31,
        rain: {
          '3h': 0.26,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-22 21:00:00',
      },
      {
        dt: 1682208000,
        main: {
          temp: 21.3,
          feels_like: 21.71,
          temp_min: 21.3,
          temp_max: 21.3,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'chuva leve',
            icon: '10n',
          },
        ],
        clouds: {
          all: 23,
        },
        wind: {
          speed: 2.11,
          deg: 87,
          gust: 3.31,
        },
        visibility: 10000,
        pop: 0.23,
        rain: {
          '3h': 0.22,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-23 00:00:00',
      },
      {
        dt: 1682218800,
        main: {
          temp: 20.8,
          feels_like: 21.18,
          temp_min: 20.8,
          temp_max: 20.8,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: 'Rain',
            description: 'chuva leve',
            icon: '10n',
          },
        ],
        clouds: {
          all: 62,
        },
        wind: {
          speed: 1.88,
          deg: 80,
          gust: 2.49,
        },
        visibility: 10000,
        pop: 0.28,
        rain: {
          '3h': 0.11,
        },
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-23 03:00:00',
      },
      {
        dt: 1682229600,
        main: {
          temp: 20.2,
          feels_like: 20.55,
          temp_min: 20.2,
          temp_max: 20.2,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1015,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04n',
          },
        ],
        clouds: {
          all: 70,
        },
        wind: {
          speed: 1.58,
          deg: 64,
          gust: 2.1,
        },
        visibility: 10000,
        pop: 0.2,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-23 06:00:00',
      },
      {
        dt: 1682240400,
        main: {
          temp: 19.23,
          feels_like: 19.51,
          temp_min: 19.23,
          temp_max: 19.23,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'algumas nuvens',
            icon: '02n',
          },
        ],
        clouds: {
          all: 24,
        },
        wind: {
          speed: 1.57,
          deg: 41,
          gust: 1.84,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-23 09:00:00',
      },
      {
        dt: 1682251200,
        main: {
          temp: 22.68,
          feels_like: 22.81,
          temp_min: 22.68,
          temp_max: 22.68,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1018,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04d',
          },
        ],
        clouds: {
          all: 51,
        },
        wind: {
          speed: 1.21,
          deg: 58,
          gust: 2.83,
        },
        visibility: 10000,
        pop: 0.02,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-23 12:00:00',
      },
      {
        dt: 1682262000,
        main: {
          temp: 25.34,
          feels_like: 25.26,
          temp_min: 25.34,
          temp_max: 25.34,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: 'Clouds',
            description: 'nublado',
            icon: '04d',
          },
        ],
        clouds: {
          all: 86,
        },
        wind: {
          speed: 2.27,
          deg: 111,
          gust: 3.22,
        },
        visibility: 10000,
        pop: 0.07,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-23 15:00:00',
      },
      {
        dt: 1682272800,
        main: {
          temp: 25.6,
          feels_like: 25.52,
          temp_min: 25.6,
          temp_max: 25.6,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1015,
          humidity: 50,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04d',
          },
        ],
        clouds: {
          all: 78,
        },
        wind: {
          speed: 3.11,
          deg: 118,
          gust: 4.12,
        },
        visibility: 10000,
        pop: 0.07,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-23 18:00:00',
      },
      {
        dt: 1682283600,
        main: {
          temp: 22.48,
          feels_like: 22.56,
          temp_min: 22.48,
          temp_max: 22.48,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04n',
          },
        ],
        clouds: {
          all: 79,
        },
        wind: {
          speed: 2.37,
          deg: 113,
          gust: 5.08,
        },
        visibility: 10000,
        pop: 0.05,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-23 21:00:00',
      },
      {
        dt: 1682294400,
        main: {
          temp: 21.76,
          feels_like: 21.92,
          temp_min: 21.76,
          temp_max: 21.76,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 74,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04n',
          },
        ],
        clouds: {
          all: 75,
        },
        wind: {
          speed: 2.05,
          deg: 78,
          gust: 3.8,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-24 00:00:00',
      },
      {
        dt: 1682305200,
        main: {
          temp: 20.85,
          feels_like: 21.03,
          temp_min: 20.85,
          temp_max: 20.85,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04n',
          },
        ],
        clouds: {
          all: 68,
        },
        wind: {
          speed: 1.24,
          deg: 16,
          gust: 1.68,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-24 03:00:00',
      },
      {
        dt: 1682316000,
        main: {
          temp: 19.24,
          feels_like: 19.39,
          temp_min: 19.24,
          temp_max: 19.24,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'nuvens dispersas',
            icon: '03n',
          },
        ],
        clouds: {
          all: 35,
        },
        wind: {
          speed: 1.18,
          deg: 320,
          gust: 1.36,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-24 06:00:00',
      },
      {
        dt: 1682326800,
        main: {
          temp: 18.7,
          feels_like: 18.79,
          temp_min: 18.7,
          temp_max: 18.7,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01n',
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 1.38,
          deg: 335,
          gust: 1.46,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-24 09:00:00',
      },
      {
        dt: 1682337600,
        main: {
          temp: 21.42,
          feels_like: 21.52,
          temp_min: 21.42,
          temp_max: 21.42,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1018,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'nuvens dispersas',
            icon: '03d',
          },
        ],
        clouds: {
          all: 36,
        },
        wind: {
          speed: 0.35,
          deg: 40,
          gust: 0.73,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-24 12:00:00',
      },
      {
        dt: 1682348400,
        main: {
          temp: 25.47,
          feels_like: 25.64,
          temp_min: 25.47,
          temp_max: 25.47,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 60,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'nuvens dispersas',
            icon: '03d',
          },
        ],
        clouds: {
          all: 32,
        },
        wind: {
          speed: 1.34,
          deg: 132,
          gust: 1.26,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-24 15:00:00',
      },
      {
        dt: 1682359200,
        main: {
          temp: 25.24,
          feels_like: 25.46,
          temp_min: 25.24,
          temp_max: 25.24,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1015,
          humidity: 63,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'algumas nuvens',
            icon: '02d',
          },
        ],
        clouds: {
          all: 22,
        },
        wind: {
          speed: 2.53,
          deg: 132,
          gust: 1.88,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-24 18:00:00',
      },
      {
        dt: 1682370000,
        main: {
          temp: 22.3,
          feels_like: 22.67,
          temp_min: 22.3,
          temp_max: 22.3,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'nuvens dispersas',
            icon: '03n',
          },
        ],
        clouds: {
          all: 32,
        },
        wind: {
          speed: 1.96,
          deg: 117,
          gust: 3.28,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-24 21:00:00',
      },
      {
        dt: 1682380800,
        main: {
          temp: 21.64,
          feels_like: 22.11,
          temp_min: 21.64,
          temp_max: 21.64,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1017,
          humidity: 86,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: 'Clouds',
            description: 'algumas nuvens',
            icon: '02n',
          },
        ],
        clouds: {
          all: 18,
        },
        wind: {
          speed: 1.24,
          deg: 63,
          gust: 1.71,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-25 00:00:00',
      },
      {
        dt: 1682391600,
        main: {
          temp: 20.72,
          feels_like: 21.17,
          temp_min: 20.72,
          temp_max: 20.72,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 89,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01n',
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 1.15,
          deg: 359,
          gust: 1.39,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-25 03:00:00',
      },
      {
        dt: 1682402400,
        main: {
          temp: 19.94,
          feels_like: 20.37,
          temp_min: 19.94,
          temp_max: 19.94,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1015,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01n',
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 1.2,
          deg: 343,
          gust: 1.29,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-25 06:00:00',
      },
      {
        dt: 1682413200,
        main: {
          temp: 19.38,
          feels_like: 19.75,
          temp_min: 19.38,
          temp_max: 19.38,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1015,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'céu limpo',
            icon: '01n',
          },
        ],
        clouds: {
          all: 3,
        },
        wind: {
          speed: 1.14,
          deg: 353,
          gust: 1.25,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-25 09:00:00',
      },
      {
        dt: 1682424000,
        main: {
          temp: 23.49,
          feels_like: 23.77,
          temp_min: 23.49,
          temp_max: 23.49,
          pressure: 1019,
          sea_level: 1019,
          grnd_level: 1016,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'nuvens dispersas',
            icon: '03d',
          },
        ],
        clouds: {
          all: 41,
        },
        wind: {
          speed: 0.93,
          deg: 8,
          gust: 1.56,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-25 12:00:00',
      },
      {
        dt: 1682434800,
        main: {
          temp: 27,
          feels_like: 28.01,
          temp_min: 27,
          temp_max: 27,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1015,
          humidity: 59,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04d',
          },
        ],
        clouds: {
          all: 64,
        },
        wind: {
          speed: 1.85,
          deg: 124,
          gust: 1.4,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-25 15:00:00',
      },
      {
        dt: 1682445600,
        main: {
          temp: 26.75,
          feels_like: 28.03,
          temp_min: 26.75,
          temp_max: 26.75,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1013,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04d',
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 2.97,
          deg: 119,
          gust: 2.61,
        },
        visibility: 10000,
        pop: 0.1,
        sys: {
          pod: 'd',
        },
        dt_txt: '2023-04-25 18:00:00',
      },
      {
        dt: 1682456400,
        main: {
          temp: 23.64,
          feels_like: 24.28,
          temp_min: 23.64,
          temp_max: 23.64,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1014,
          humidity: 85,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'nublado',
            icon: '04n',
          },
        ],
        clouds: {
          all: 64,
        },
        wind: {
          speed: 1.92,
          deg: 111,
          gust: 3.86,
        },
        visibility: 10000,
        pop: 0.1,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-25 21:00:00',
      },
      {
        dt: 1682467200,
        main: {
          temp: 22.93,
          feels_like: 23.58,
          temp_min: 22.93,
          temp_max: 22.93,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1015,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'nuvens dispersas',
            icon: '03n',
          },
        ],
        clouds: {
          all: 37,
        },
        wind: {
          speed: 1.97,
          deg: 54,
          gust: 2.58,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: 'n',
        },
        dt_txt: '2023-04-26 00:00:00',
      },
    ],
    city: {
      id: 7538753,
      name: 'Vila Joaniza',
      coord: {
        lat: -22.8513,
        lon: -43.2491,
      },
      country: 'BR',
      population: 0,
      timezone: -10800,
      sunrise: 1681981660,
      sunset: 1682022951,
    },
  },
  location: {
    annotations: {
      DMS: {
        lat: "22° 51' 4.86108'' S",
        lng: "43° 14' 56.33304'' W",
      },
      MGRS: '23KPQ7966271869',
      Maidenhead: 'GG87jd05cq',
      Mercator: {
        x: -4814454.587,
        y: -2597464.974,
      },
      OSM: {
        edit_url: 'https://www.openstreetmap.org/edit?way=166499507#map=17/-22.85135/-43.24898',
        note_url: 'https://www.openstreetmap.org/note/new#map=17/-22.85135/-43.24898&layers=N',
        url: 'https://www.openstreetmap.org/?mlat=-22.85135&mlon=-43.24898#map=17/-22.85135/-43.24898',
      },
      UN_M49: {
        regions: {
          AMERICAS: '019',
          BR: '076',
          LATIN_AMERICA: '419',
          SOUTH_AMERICA: '005',
          WORLD: '001',
        },
        statistical_groupings: [
          'LEDC',
        ],
      },
      callingcode: 55,
      currency: {
        decimal_mark: ',',
        html_entity: 'R$',
        iso_code: 'BRL',
        iso_numeric: '986',
        name: 'Brazilian Real',
        smallest_denomination: 5,
        subunit: 'Centavo',
        subunit_to_unit: 100,
        symbol: 'R$',
        symbol_first: 1,
        thousands_separator: '.',
      },
      flag: '🇧🇷',
      geohash: '75cnpb511xw1g5yjkne6',
      qibla: 67.64,
      roadinfo: {
        drive_on: 'right',
        road: 'Avenida Teixeira de Castro',
        road_type: 'tertiary',
        speed_in: 'km/h',
      },
      sun: {
        rise: {
          apparent: 1682068140,
          astronomical: 1682063640,
          civil: 1682066760,
          nautical: 1682065200,
        },
        set: {
          apparent: 1682109240,
          astronomical: 1682113740,
          civil: 1682110620,
          nautical: 1682112180,
        },
      },
      timezone: {
        name: 'America/Sao_Paulo',
        now_in_dst: 0,
        offset_sec: -10800,
        offset_string: '-0300',
        short_name: 'BRT',
      },
      what3words: {
        words: 'loose.shot.fiction',
      },
    },
    bounds: {
      northeast: {
        lat: -22.8494913,
        lng: -43.2478728,
      },
      southwest: {
        lat: -22.8518471,
        lng: -43.2497102,
      },
    },
    components: {
      'ISO_3166-1_alpha-2': 'BR',
      'ISO_3166-1_alpha-3': 'BRA',
      'ISO_3166-2': [
        'BR-RJ',
      ],
      _category: 'road',
      _type: 'road',
      city: 'Rio de Janeiro',
      city_district: 'Zona Norte do Rio de Janeiro',
      continent: 'South America',
      country: 'Brasil',
      country_code: 'br',
      county: 'Região Metropolitana do Rio de Janeiro',
      municipality: 'Região Geográfica Imediata do Rio de Janeiro',
      postcode: '21044-261',
      region: 'Região Sudeste',
      road: 'Avenida Teixeira de Castro',
      road_type: 'tertiary',
      state: 'Rio de Janeiro',
      state_code: 'RJ',
      state_district: 'Região Geográfica Intermediária do Rio de Janeiro',
      suburb: 'Ramos',
    },
    confidence: 9,
    formatted: 'Avenida Teixeira de Castro, Ramos, Rio de Janeiro - RJ, 21044-261, Brasil',
    geometry: {
      lat: -22.8513503,
      lng: -43.2489814,
    },
  },
};

export default contextMock;