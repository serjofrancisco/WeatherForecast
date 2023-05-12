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
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '100%',
    paddingTop: '50px',
  } as const;

  const externalDivWeatherCard = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
    height: '100%',
    padding: '0',
    margin: 'auto',
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
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
        <ul style={externalDivWeatherCard}>
          { (weather?.list)
            ? (weather.list
              .map((item) => <WeatherCard weather={item} key={item.dt} />)
            ) : <h1>Carregando...</h1>}
        </ul>
      </main>
      <Footer />
    </>
  );
}
