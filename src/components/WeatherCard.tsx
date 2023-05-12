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
    padding: '33px',
    height: '30%',
    backgroundColor: 'rgb(205 205 205 / 88%)',
    borderRadius: '10px',
    fontSize: '1.2rem',
    position: 'relative',
  } as const;

  const imgStyle = {
    position: 'absolute',
    right: '13px',
    top: '6px',
  } as const;

  return (
    <li style={styling}>
      { iconURL && (
        <Image
          style={imgStyle}
          src={iconURL}
          alt={weather.weather[0].description}
          width={90}
          height={90}
        />
      )}
      <h1 className="font-bold">{`Data ${weatherDate}`}</h1>
      <h1 className="font-bold">
        {`${
          firstLetterToUpperCase(weather.weather[0].description)
        }`}

      </h1>
      <p>{`Temperatura atual: ${weather.main.temp}`}</p>
      <p>{`Temperatura Máxima: ${weather.main.temp_max}`}</p>
      <p>{`Temperatura Mínima: ${weather.main.temp_min}`}</p>
      <p>{`Velocidade do Vento: ${weather.wind.speed}Km/h`}</p>
      <p>{`Chance de Chuva: ${(weather.pop * 100).toFixed(0)}%`}</p>
    </li>
  );
}
