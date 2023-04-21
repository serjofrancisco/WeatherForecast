import { ReactNode } from 'react';
import { IWeatherForecast } from './IWeatherAPI';
import { ILocation } from './ILocationAPI';

interface IContext {
  position: {
    latitude: number;
    longitude: number;
  }
  weather: IWeatherForecast;
  location: ILocation;
}

interface IContextProviderProps {
  children: ReactNode;
}

export type { IContext, IContextProviderProps };
