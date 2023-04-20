import { getHourFromTimestamp } from "@/helpers/dateFormat";
import { Context } from "@/context/context"
import { useContext, useEffect, useState } from "react"

export default function LocationCard() {
    const { location } = useContext(Context)
    const [sunrise, setSunrise] = useState("")
    const [sunset, setSunset] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    const getSunriseSunset = () => {
      if(location.annotations) {
        const sunrise = getHourFromTimestamp(location.annotations.sun.rise.apparent)
        const sunset = getHourFromTimestamp(location.annotations.sun.set.apparent)
        setSunrise(sunrise)
        setSunset(sunset)
      }
    }

    const getLocationName = () => {
      if(location?.components?.city) {
        const state = location.components["ISO_3166-2"][0].substring(2);
        const city = location.components.city;
        const country = location.components.country;
        setCity(`${city}${state}`)
        setCountry(country)
      }
    }

  useEffect(() => {
    getSunriseSunset()
    getLocationName()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const styling = {
    color: 'blue',
    padding: '10px',
    textAlign: 'center',
  } as const
    
  return (
      city && sunrise ?
      <div className="bold" style={styling}>
       
        <span>{city} |</span>
        <span> {country} |</span>
        <span>{` Nascer do sol: ${sunrise} |`}</span>
        <span>{` Pôr do sol: ${sunset} `}</span>
        
      </div>
      : <h1>Carregando...</h1>
  )
}
