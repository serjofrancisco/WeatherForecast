import getURl from '@/services/backgroundImage';
import { useState, useEffect, useContext } from 'react';
import WeatherCard from '@/components/WeatherCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CurrentWeatherCard from '@/components/CurrentWeatherCard';
import { MyContext } from '@/context/Context';
import Head from 'next/head';

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('');
  const { weather } = useContext(MyContext);
  const getBackgroundImage = async () => {
    const url = await getURl();
    setBackgroundImage(url);
  };

  useEffect(() => {
    getBackgroundImage();
  }, []);

  const styling = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'fill',
    position: 'absolute',
    width: '100%',
    height: '100%',
  } as const;

  const externalDivWeatherCard = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    padding: '0',
    margin: '0',
    fontSize: '1.5rem',
    color: 'white',
    textShadow: '2px 2px 4px #000000',
    justifyContent: 'center',
  } as const;
  return (
    <>
      <Head>
        <title>Weather APP</title>
        <meta name="description" content="Weather APP" />
      </Head>
      <Header />
      <main style={styling}>
        <CurrentWeatherCard />
        <div style={externalDivWeatherCard}>
          { (weather?.list)
            ? (weather.list
              .map((item) => <WeatherCard weather={item} key={item.dt} />)
            ) : <h1>Carregando...</h1>}
        </div>
      </main>
      <Footer />
    </>
  );
}
