import { useContext, useState, useEffect } from 'react';
import { MyContext } from '@/context/Context';
import { getCurrentWeatherFromAPI } from '@/services/weatherService';
import firstLetterToUpperCase from '@/helpers/stringFormt';
import { ICurrentWeather } from '@/Interfaces/IWeatherAPI';

export default function CurrentWeatherCard() {
  const { location } = useContext(MyContext);
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>(null!);

  const getCurrentWeather = async () => {
    if (location?.geometry) {
      const { lat, lng } = location.geometry;
      const weather = await getCurrentWeatherFromAPI(lat, lng);
      setCurrentWeather(weather);
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

  const pStyle = {
    fontSize: '1.5rem',
  } as const;

  const InformationStyle = {
    padding: '30px',
  } as const;

  return (
    <div style={stylingOutside}>
      { currentWeather?.main ? (
        <>
          <h1 style={titleStyle}>
            Clima Atual
            <p style={pStyle}>
              {`${firstLetterToUpperCase(currentWeather.weather[0].description)}`}

            </p>
          </h1>
          <div style={stylingInside}>
            <div style={InformationStyle}>

              <p>
                <b>Temperatura Atual: </b>
                {currentWeather.main.temp}
              </p>
              <p>
                <b>Sensação Térmica: </b>
                {currentWeather.main.feels_like}
              </p>
              <p>
                <b>Umidade: </b>
                {currentWeather.main.humidity}
                %
              </p>
            </div>
            <div style={InformationStyle}>

              <p>
                <b>Temperatura Máxima: </b>
                {currentWeather.main.temp_max}

              </p>
              <p>
                <b>Temperatura Mínima: </b>
                {currentWeather.main.temp_min}

              </p>

              <p>
                <b>Velocidade do Vento: </b>
                {currentWeather.wind.speed}
                Km/h
              </p>
            </div>
          </div>

        </>
      ) : <h1>Carregando...</h1>}
    </div>
  );
}
