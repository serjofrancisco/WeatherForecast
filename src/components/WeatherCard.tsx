import { getWeatherIconURL} from "@/services/weatherService"
import { useState, useEffect } from "react"
import { Context } from "@/context/context"
import { useContext } from "react"
import IWeather from "@/Interfaces/IWeatherAPI"
import Image from "next/image"


export default function WeatherCard() {
    const { position } = useContext(Context)
    const [iconURL, setIconURL] = useState("")

    const getIcon = (icon: string) => {
        const url = getWeatherIconURL(icon)
        setIconURL(url)
    }

    useEffect(() => {
        // if(weather.weather) getIcon(weather.weather[0].icon)
    }, [position])

    const styleSheet = {
        color: "white",
        border: "1px solid red",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",

    } as const

  return (
      //   weather.main && (
      //     <div style={styleSheet}>
      // <h1>Weather Card</h1>
      // <Image src={iconURL} alt={weather.weather[0].description} width={30} height={30} />
      // <p>{`Temperatura atual: ${weather.main.temp}`}</p>
      // <p>{`Temperatura Máxima: ${weather.main.temp_max}`}</p>
      // <p>{`Temperatura Minima: ${weather.main.temp_min}`}</p>
      // <p>{`Nascer Do Sol: ${weather.sys.sunrise}`}</p>
      // <p>{`Por Do Sol: ${weather.sys.sunset}`}</p>
      // </div>
      //   )
      <h1>teste</h1>
  )
}
