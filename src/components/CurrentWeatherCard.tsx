import { useContext, useState, useEffect } from 'react'
import { Context } from '@/context/context'
import { getCurrentWeatherFromAPI, getWeatherIconURL } from '@/services/weatherService'
import { ICurrentWeather } from '@/Interfaces/IWeatherAPI'

export default function CurrentWeatherCard() {
    const { position } = useContext(Context)
    const [iconURL, setIconURL] = useState("")
    const [currentWeather, setCurrentWeather] = useState({} as ICurrentWeather)
    
    const getIcon = (icon: string) => {
        const url = getWeatherIconURL(icon)
        setIconURL(url)
    }

    const getCurrentWeather = async () => {
        const weather = await getCurrentWeatherFromAPI(position.latitude, position.longitude)
        setCurrentWeather(weather)
        getIcon(weather.weather[0].icon)
    }

    useEffect(() => {
        getCurrentWeather()
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


  return (
    <div>
       { currentWeather.main ? (
            <div>
                <p>{`Temperatura Atual: ${currentWeather.main.temp}`}</p>
                <p>{`Sensação Térmica: ${currentWeather.main.feels_like}`}</p>
                <p>{`Temperatura Máxima: ${currentWeather.main.temp_max}`}</p>
                <p>{`Temperatura Mínima: ${currentWeather.main.temp_min}`}</p>
                <p>{`Umidade: ${currentWeather.main.humidity}`}</p>
                <p>{`Velocidade do Vento: ${currentWeather.wind.speed}Km/h`}</p>
                </div>
        ) : <h1>Carregando...</h1>
    }
    </div>
  )
}