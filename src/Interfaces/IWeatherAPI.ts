export default interface IWeather 
  {
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": [
        {
            "id": number,
            "main": string, // Grupo do clima
            "description": string, // descrição do clima
            "icon": string // icon id (Lembrar o que fazer com isso)
        }
    ],
    "base": string,
    "main": {
        "temp": number,  // temperatura
        "feels_like": number, // sensação térmica
        "temp_min": number,  // temperatura minima
        "temp_max": number,  // temperatura maxima
        "pressure": number,  // pressão atmosferica
        "humidity": number   // umidade do ar
    },
    "visibility": number, // visibilidade
    "wind": {
        "speed": number, // velocidade do vento
        "deg": number    // direção do vento
    },
    "clouds": {
        "all": number   // porcentagem de nuvens
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "country": string, // codigo do pais
        "sunrise": string, // horario do nascer do sol
        "sunset": string  // horario do por do sol
    },
    "timezone": number, // diferença de horario em segundos com o UTC
    "id": number,
    "name": string,
    "cod": number // codigo de resposta, 200 = ok
}