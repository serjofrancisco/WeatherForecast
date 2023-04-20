interface IWeather 
{
    "dt": number, // data e hora da previsão
    "main": {
        "temp": number, // temperatura
        "feels_like": number, // sensação térmica
        "temp_min": number, // temperatura mínima
        "temp_max": number, // temperatura máxima
        "pressure": number, // pressão atmosférica (hPa)
        "sea_level": number, // pressão atmosférica no nível do mar (hPa)
        "grnd_level": number, // pressão atmosférica no nível do solo (hPa)
        "humidity": number, // umidade relativa do ar
        "temp_kf": number 
    },
    "weather": [
        {
            "id": number, // id da condição meteorológica
            "main": string, // grupo da condição meteorológica
            "description": string, // condição meteorológica
            "icon": string // ícone da condição meteorológica
        }
    ],
    "clouds": {
        "all": number // taxa de nuvens
    },
    "wind": {
        "speed": number, // velocidade do vento
        "deg": number, // direção do vento
        "gust": number // velocidade do vento
    },
    "visibility": number, // visibilidade
    "pop": number, // probabilidade de chuva
    "rain": {
        "3h": number // volume de chuva nas últimos 3 horas
    },
    "sys": {
        "pod": string // parte do dia (d = dia, n = noite)
    },
    "dt_txt": string // data e hora da previsão em formato de texto
}


interface IWeatherForecast {
    "cod": string 
    "message": number,
    "cnt": number, // número de previsões
    "list": IWeather[],
    "city": {
        "id": number, // id da cidade
        "name": string, // nome da cidade
        "coord": {
            "lat": number, // latitude
            "lon": number // longitude
        },
        "country": string, // código do país
        "population": number, // população
        "timezone": number, // fuso horário (segundos)
        "sunrise": number, // horário do nascer do sol
        "sunset": number // horário do pôr do sol
    }
}
interface ICurrentWeather {
    "coord": {
        "lon": string,
        "lat": -22.8512
    },
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number,
        "gust": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number
}

export type {IWeather, IWeatherForecast, ICurrentWeather};