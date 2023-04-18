import React, { createContext, useState, useEffect } from "react";
import { getWeatherFromAPI } from "@/services/weatherService";
import { IWeatherForecast } from "@/Interfaces/IWeatherAPI";
import { ILocation } from "@/Interfaces/ILocationAPI";
import { getLocationFromLatitudeLongitute } from "@/services/locationService";

type ContextType = {
    position: {
        latitude: number;
        longitude: number;
    }
    weather: IWeatherForecast;
    location: ILocation;
}

const Context = createContext<ContextType>({
    position: {
        latitude: 0,	
        longitude: 0
    },
    weather: {} as IWeatherForecast,
    location: {} as ILocation
});

type ContextProviderProps = {
    children: React.ReactNode;
  };

const ContextProvider: React.FC<ContextProviderProps> =  ({ children }) => {
 
    const [position, setPosition] = useState({ latitude: 0, longitude: 0})
    const [weather, setWeather] = useState({} as IWeatherForecast)
    const [location, setLocation] = useState({} as ILocation)

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords
          setPosition({ latitude, longitude })
        })
      }

      const getWeather = async () => {
        const weather = await getWeatherFromAPI(position.latitude, position.longitude)
        setWeather(weather) 
    }
      const getLocation = async () => {
        const location = await getLocationFromLatitudeLongitute(position.latitude, position.longitude)
        setLocation(location)
      }

   useEffect(() => {
       getPosition()
   }, [])

   useEffect(() => {
         getWeather()
         getLocation()
    }, [position])

    return (
        <Context.Provider value={{ position, weather, location }}>{children}</Context.Provider>
    )
  
}   

export { Context, ContextProvider }