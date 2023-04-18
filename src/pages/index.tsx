import getURl from "@/services/backgroundImage"
import Image from "next/image"
import { useState, useEffect } from "react"
import WeatherCard from "@/components/WeatherCard"
import Header from "@/components/Header"
import LocationCard from "@/components/LocationCard"
import { Context } from "@/context/context"
import { useContext } from "react"
export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState("")
  const { weather } = useContext(Context)
  const getBackgroundImage = async () => {
    const url = await getURl()
    setBackgroundImage(url)
  }
  
   useEffect(() => {
    getBackgroundImage()
    
   }, [])
   const styling = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
   } as const

   const externalDivWeatherCard = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      height: "100%",
      padding: "0",
      margin: "0",
      fontSize: "1.5rem",
      color: "white",
      textShadow: "2px 2px 4px #000000",
    } as const
  return (
    <>
    <Header />
    <main style={styling}>
      <LocationCard />
      <div style={externalDivWeatherCard}>
      { weather.list ? weather.list.map((item, index) => {
        return <WeatherCard weather={item} key={index}/>
      }) : <h1>Carregando...</h1>
      }
      </div>
    </main> 
    </>
  )
}
