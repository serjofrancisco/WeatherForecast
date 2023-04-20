import React, {
  createContext, useState, useEffect, useMemo, ReactElement, ReactNode,
} from 'react';
import { getWeatherFromAPI } from '@/services/weatherService';
import { IWeatherForecast } from '@/Interfaces/IWeatherAPI';
import { ILocation } from '@/Interfaces/ILocationAPI';
import getLocationFromLatitudeLongitute from '@/services/locationService';

type ContextType = {
  position: {
    latitude: number;
    longitude: number;
  }
  weather: IWeatherForecast;
  location: ILocation;
};

const Context = createContext<ContextType>({
  position: {
    latitude: 0,
    longitude: 0,
  },
  weather: {} as IWeatherForecast,
  location: {} as ILocation,
});

type ContextProviderProps = {
  children: ReactNode;
};

function ContextProvider({ children }: ContextProviderProps): ReactElement<ContextProviderProps> {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [weather, setWeather] = useState({} as IWeatherForecast);
  const [location, setLocation] = useState({} as ILocation);

  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((locationGet) => {
      const { latitude, longitude } = locationGet.coords;
      setPosition({ latitude, longitude });
    });
  };

  const getWeather = async () => {
    const weatherData = await getWeatherFromAPI(position.latitude, position.longitude);
    setWeather(weatherData);
  };
  const getLocation = async () => {
    const { latitude, longitude } = position;
    const locationData = await getLocationFromLatitudeLongitute(latitude, longitude);
    setLocation(locationData);
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    getWeather();
    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const value = useMemo(() => ({
    position,
    weather,
    location,
  }), [position, weather, location]);

  return (
    <Context.Provider value={value}>{children}</Context.Provider>
  );
}

export { Context, ContextProvider };
