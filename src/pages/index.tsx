import getURl from "@/services/backgroundImage"
import Image from "next/image"
import { useState, useEffect } from "react"
export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState("")
  const getBackgroundImage = async () => {
    const url = await getURl()
    setBackgroundImage(url)
    console.log(url)
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
    </main> 
  )
}
