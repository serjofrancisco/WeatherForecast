import getWeatherFromAPI from "@/services/weatherService"
import { useState, useEffect } from "react"
import { Context } from "@/context/context"
import { useContext } from "react"
import IWeather from "@/Interfaces/IWeatherAPI"


export default function WeatherCard() {
    const { position } = useContext(Context)
    const [weather, setWeather] = useState({} as IWeather)

    const getWeather = async () => {
        const weather = await getWeatherFromAPI(position.latitude, position.longitude)
        setWeather(weather)
        console.log(weather)
    }

    useEffect(() => {
        getWeather()
    }, [position])

    const styleSheet = {
        color: "black",
    } as const

  return (
        weather.main && (
          <div style={styleSheet}>
      <h1>Weather Card</h1>
      <p>{`Temperatura atual: ${weather.main.temp}`}</p>
      <p>{`Temperatura Máxima: ${weather.main.temp_max}`}</p>
      <p>{`Temperatura Minima: ${weather.main.temp_min}`}</p>
      <p>{`Nascer Do Sol: ${weather.sys.sunrise}`}</p>
      <p>{`Por Do Sol: ${weather.sys.sunset}`}</p>
      </div>
        )
  )
}

// interface Weather 
//   {
//     "coord": {
//         "lon": number,
//         "lat": number
//     },
//     "weather": [
//         {
//             "id": number,
//             "main": string, // Grupo do clima
//             "description": string, // descrição do clima
//             "icon": string // icon id (Lembrar o que fazer com isso)
//         }
//     ],
//     "base": string,
//     "main": {
//         "temp": number,  // temperatura
//         "feels_like": number, // sensação térmica
//         "temp_min": number,  // temperatura minima
//         "temp_max": number,  // temperatura maxima
//         "pressure": number,  // pressão atmosferica
//         "humidity": number   // umidade do ar
//     },
//     "visibility": number, // visibilidade
//     "wind": {
//         "speed": number, // velocidade do vento
//         "deg": number    // direção do vento
//     },
//     "clouds": {
//         "all": number   // porcentagem de nuvens
//     },
//     "dt": number,
//     "sys": {
//         "type": number,
//         "id": number,
//         "country": string, // codigo do pais
//         "sunrise": TimeRanges, // horario do nascer do sol
//         "sunset": TimeRanges  // horario do por do sol
//     },
//     "timezone": number, // diferença de horario em segundos com o UTC
//     "id": number,
//     "name": string,
//     "cod": number // codigo de resposta, 200 = ok
// }
