import getWeatherFromAPI from "@/services/weatherService"
import { useState, useEffect } from "react"
import { Context } from "@/context/context"
import { useContext } from "react"


export default function WeatherCard() {
    const { position } = useContext(Context)
    const [weather, setWeather] = useState({})

    const getWeather = async () => {
        const weather = await getWeatherFromAPI(position.latitude, position.longitude)
        setWeather(weather)
        console.log(weather)
    }

    useEffect(() => {
        getWeather()
    }, [position])

  return (
    <div>nada</div>
  )
}
