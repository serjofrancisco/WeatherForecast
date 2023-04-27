import { useContext, useState, useEffect } from 'react';
import { MyContext } from '@/context/Context';
import { getCurrentWeatherFromAPI, getWeatherIconURL } from '@/services/weatherService';
import firstLetterToUpperCase from '@/helpers/stringFormt';
import { ICurrentWeather } from '@/Interfaces/IWeatherAPI';
import Image from 'next/image';

export default function CurrentWeatherCard() {
  const { location } = useContext(MyContext);
  const [iconURL, setIconURL] = useState('');
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>(null!);

  const getIcon = (icon: string) => {
    const url = getWeatherIconURL(icon);
    setIconURL(url);
  };

  const getCurrentWeather = async () => {
    if (location?.geometry) {
      const { lat, lng } = location.geometry;
      const weather = await getCurrentWeatherFromAPI(lat, lng);
      setCurrentWeather(weather);
      getIcon(weather.weather[0].icon);
    }
  };

  useEffect(() => {
    getCurrentWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const stylingOutside = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    color: 'white',
    textShadow: '2px 2px 4px #000000',
  } as const;

  const titleStyle = {
    fontSize: '2rem',
    color: 'white',
    textShadow: '2px 2px 4px #000000',
    textAlign: 'center',
  } as const;
  return (
    <div>
      { currentWeather?.main ? (
        <>
          <h1 style={titleStyle}>Clima Atual</h1>
          <div style={stylingOutside}>
            <div>
              <p>
                {`${firstLetterToUpperCase(currentWeather.weather[0].description)}`}

              </p>
              {iconURL && (
              <Image
                src={iconURL}
                alt={currentWeather.weather[0].description}
                width={30}
                height={30}
              />
              )}
              <p>{`Temperatura Atual: ${currentWeather.main.temp}`}</p>
              <p>{`Sensação Térmica: ${currentWeather.main.feels_like}`}</p>
            </div>
            <div>

              <p>{`Temperatura Máxima: ${currentWeather.main.temp_max}`}</p>
              <p>{`Temperatura Mínima: ${currentWeather.main.temp_min}`}</p>
              <p>{`Umidade: ${currentWeather.main.humidity}`}</p>
              <p>{`Velocidade do Vento: ${currentWeather.wind.speed}Km/h`}</p>
            </div>
          </div>

        </>
      ) : <h1>Carregando...</h1>}
    </div>
  );
}
