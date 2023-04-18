import React, { createContext, useState, useEffect } from "react";

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

export const ContextProvider: React.FC<ContextProviderProps> =  ({ children }) => {
 
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

    return (
        <Context.Provider value={{ position }}>{children}</Context.Provider>
    )
  
}   