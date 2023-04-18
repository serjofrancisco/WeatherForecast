import getURl from "@/services/backgroundImage"
import Image from "next/image"
import { useState, useEffect } from "react"
import WeatherCard from "@/components/WeatherCard"
export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState("")
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
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
  return (
    <main style={styling}>
      <h1>Background Image</h1>
      <WeatherCard />
    </main> 
  )
}
