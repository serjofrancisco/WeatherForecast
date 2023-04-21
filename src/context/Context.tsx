import React, {
  createContext, useState, useEffect, useMemo, ReactElement,
} from 'react';
import { getWeatherFromAPI } from '@/services/weatherService';
import { IWeatherForecast } from '@/Interfaces/IWeatherAPI';
import { IContext, IContextProviderProps } from '@/Interfaces/IContext';
import { ILocation } from '@/Interfaces/ILocationAPI';
import getLocationFromLatitudeLongitute from '@/services/locationService';

const MyContext = createContext<IContext>(null!);

function ContextProvider({ children }: IContextProviderProps): ReactElement<IContextProviderProps> {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [weather, setWeather] = useState<IWeatherForecast>(null!);
  const [location, setLocation] = useState<ILocation>(null!);

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

  const value = useMemo<IContext>(() => ({
    position,
    weather,
    location,
  }), [position, weather, location]);

  return (
    <MyContext.Provider value={value}>{children}</MyContext.Provider>
  );
}

export { MyContext, ContextProvider };
