import getURl from "@/services/backgroundImage"
import Image from "next/image"
import { useState, useEffect } from "react"
import WeatherCard from "@/components/WeatherCard"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CurrentWeatherCard from "@/components/CurrentWeatherCard"
import { Context } from "@/context/context"
import { useContext } from "react"
import Head from "next/head"
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
    backgroundSize: "fill",
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
      justifyContent: "center",
    } as const
  return (
    <>
    <Head>
      <title>Weather APP</title>
      <meta name="description" content="Weather APP" />
    </Head>
    <Header />
    <main style={styling}>
      <CurrentWeatherCard />
      <div style={externalDivWeatherCard}>
      { weather.list ? weather.list.map((item, index) => {
        return <WeatherCard weather={item} key={index}/>
      }) : <h1>Carregando...</h1>
      }
      </div>
    </main>
    <Footer />
    </>
  )
}
