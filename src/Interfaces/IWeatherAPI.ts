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
        "lon": string, // longitude
        "lat": string // latitude
    },
    "weather": [
        {
            "id": number, // id da condição meteorológica
            "main": string, // grupo da condição meteorológica
            "description": string, // condição meteorológica
            "icon": string // ícone da condição meteorológica
        }
    ],
    "base": string,
    "main": {
        "temp": number, // temperatura
        "feels_like": number, // sensação térmica
        "temp_min": number, // temperatura mínima
        "temp_max": number, // temperatura máxima
        "pressure": number, // pressão atmosférica (hPa)
        "humidity": number // umidade relativa do ar
    },
    "visibility": number, // visibilidade
    "wind": {
        "speed": number, // velocidade do vento
        "deg": number, // direção do vento
        "gust": number // velocidade do vento
    },
    "clouds": {
        "all": number // taxa de nuvens
    },
    "dt": number, // data e hora da previsão
    "sys": { 
        "type": number, // tipo de sistema
        "id": number, // id do sistema
        "country": string, // código do país
        "sunrise": number, // horário do nascer do sol
        "sunset": number // horário do pôr do sol
    },
    "timezone": number, // fuso horário (segundos)
    "id": number, // id da cidade
    "name": string, // nome da cidade
    "cod": number // código de resposta
}

export type {IWeather, IWeatherForecast, ICurrentWeather};