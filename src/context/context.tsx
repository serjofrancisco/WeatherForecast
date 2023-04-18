import React, { createContext, useState, useEffect } from "react";
import getLatitudelongitude from "@/services/locationService"

type ContextType = {
    position: {
        latitude: number;
        longitude: number;
    }
}

const Context = createContext<ContextType>({
    position: {
        latitude: 0,
        longitude: 0
    }
});

type ContextProviderProps = {
    children: React.ReactNode;
  };

const ContextProvider: React.FC<ContextProviderProps> =  ({ children }) => {
 
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords
          setPosition({ latitude, longitude })
        })
      } 

   useEffect(() => {
       getPosition()
   } , [])
   
useEffect(() => {
    getLatitudelongitude(position.latitude, position.longitude)
} , [position])

    return (
        <Context.Provider value={{ position }}>{children}</Context.Provider>
    )
  
}   

export { Context, ContextProvider }