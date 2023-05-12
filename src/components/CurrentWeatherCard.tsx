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

  const stylingInside = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    color: 'black',
  } as const;

  const stylingOutside = {
    width: '80%',
    maxWidth: '1060px',
    margin: 'auto',
    backgroundColor: 'rgb(205 205 205 / 88%)',
    borderRadius: '25px',
    position: 'relative',
  } as const;

  const titleStyle = {
    fontSize: '3rem',
    color: 'black',
    textAlign: 'center',
  } as const;

  const imgStyle = {
    position: 'absolute',
    left: '300px',
    top: '0px',
  } as const;

  return (
    <div style={stylingOutside}>
      { currentWeather?.main ? (
        <>
          <h1 style={titleStyle}>
            {iconURL && (
            <Image
              style={imgStyle}
              src={iconURL}
              alt={currentWeather.weather[0].description}
              width={90}
              height={90}
            />
            )}
            Clima Atual

          </h1>
          <div style={stylingInside}>
            <div>
              <p>
                {`${firstLetterToUpperCase(currentWeather.weather[0].description)}`}

              </p>

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
