import { getWeatherIconURL} from "@/services/weatherService"
import { useState, useEffect } from "react"
import { Context } from "@/context/context"
import { useContext } from "react"
import { IWeather } from "@/Interfaces/IWeatherAPI"
import Image from "next/image"
import { getCompleteDateFromTimestamp } from "@/helpers/dateFormat"


export default function WeatherCard(props: { weather: IWeather }) {
    const { position } = useContext(Context)
    const [iconURL, setIconURL] = useState("")
    const { weather } = props
    const [weatherDate, setWeatherDate] = useState('')

    const getIcon = (icon: string) => {
        const url = getWeatherIconURL(icon)
        setIconURL(url)
    }
    
    const getWeatherDate = () => {
        const date = getCompleteDateFromTimestamp(weather.dt)
        setWeatherDate(date)
    }
   

    useEffect(() => {
        getIcon(weather.weather[0].icon)
    }, [position])

    useEffect(() => {
        getWeatherDate()
    })

  

    

  return (
          <div >
      <h1>{`Data ${weatherDate}`}</h1>
      { iconURL && <Image src={iconURL} alt={weather.weather[0].description} width={30} height={30} />}
      <p>{`Temperatura atual: ${weather.main.temp}`}</p>
      <p>{`Temperatura Máxima: ${weather.main.temp_max}`}</p>
      <p>{`Temperatura Minima: ${weather.main.temp_min}`}</p>
      </div>
  )
}
