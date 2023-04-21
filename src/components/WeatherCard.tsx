import { getWeatherIconURL } from '@/services/weatherService';
import { useState, useEffect } from 'react';
import { IWeather } from '@/Interfaces/IWeatherAPI';
import Image from 'next/image';
import { getCompleteDateFromTimestamp } from '@/helpers/dateFormat';
import firstLetterToUpperCase from '@/helpers/stringFormt';

export default function WeatherCard(props: { weather: IWeather }) {
  const [iconURL, setIconURL] = useState('');
  const { weather } = props;
  const [weatherDate, setWeatherDate] = useState('');

  const getIcon = (icon: string) => {
    const url = getWeatherIconURL(icon);
    setIconURL(url);
  };

  const getWeatherDate = () => {
    const date = getCompleteDateFromTimestamp(weather.dt);
    setWeatherDate(date);
  };

  useEffect(() => {
    getWeatherDate();
    getIcon(weather.weather[0].icon);
  });

  const styling = {
    margin: '20px',
    height: '30%',
    border: '1px solid white',
  } as const;

  return (
    <div style={styling}>
      <h1>{`Data ${weatherDate}`}</h1>
      <h1>
        {`${
          firstLetterToUpperCase(weather.weather[0].description)
        }`}

      </h1>
      { iconURL && (
      <Image src={iconURL} alt={weather.weather[0].description} width={30} height={30} />
      )}
      <p>{`Temperatura atual: ${weather.main.temp}`}</p>
      <p>{`Temperatura Máxima: ${weather.main.temp_max}`}</p>
      <p>{`Temperatura Minima: ${weather.main.temp_min}`}</p>
      <p>{`Velocidade do Vento: ${weather.wind.speed}Km/h`}</p>
      <p>{`Chance de Chuva: ${(weather.pop * 100).toFixed(0)}%`}</p>
    </div>
  );
}
