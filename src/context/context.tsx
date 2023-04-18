import React, { createContext, useState, useEffect } from "react";
import { getWeatherFromAPI } from "@/services/weatherService";

type ContextType = {
    position: {
        latitude: number;
        longitude: number;
    }
    weather: IWeather;
}

const Context = createContext<ContextType>({
    position: {
        latitude: 0,	
        longitude: 0
    },
    weather: {} as IWeather
});

type ContextProviderProps = {
    children: React.ReactNode;
  };

const ContextProvider: React.FC<ContextProviderProps> =  ({ children }) => {
 
    const [position, setPosition] = useState({ latitude: 0, longitude: 0})
    const [weather, setWeather] = useState({} as IWeather)

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords
          console.log(position)
          setPosition({ latitude, longitude })
        })
      }

      const getWeather = async () => {
        const weather = await getWeatherFromAPI(position.latitude, position.longitude)
        setWeather(weather) 
    }

   useEffect(() => {
       getPosition()
   }, [])

   useEffect(() => {
         getWeather()
    }, [position])

    return (
        <Context.Provider value={{ position, weather }}>{children}</Context.Provider>
    )
  
}   

export { Context, ContextProvider }