import { getHourFromTimestamp } from '@/helpers/dateFormat';
import { MyContext } from '@/context/Context';
import { useContext, useEffect, useState } from 'react';

export default function LocationCard() {
  const { location } = useContext(MyContext);
  const [sunrise, setSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [cityState, setCityState] = useState('');
  const [country, setCountry] = useState('');

  const getSunriseSunset = () => {
    if (location?.annotations) {
      const sunriseData = getHourFromTimestamp(location.annotations.sun.rise.apparent);
      const sunsetData = getHourFromTimestamp(location.annotations.sun.set.apparent);
      setSunrise(sunriseData);
      setSunset(sunsetData);
    }
  };

  const getLocationName = () => {
    if (location?.components) {
      const state = location.components['ISO_3166-2'][0].substring(2);
      const {
        town, village, city, country: countryLocation,
      } = location.components;
      const cityName = city || town || village;
      setCityState(`${cityName}${state}`);
      setCountry(countryLocation);
    }
  };

  useEffect(() => {
    getSunriseSunset();
    getLocationName();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const styling = {
    fontSize: '1.2rem',
    color: 'black',
    textAlign: 'center',
  } as const;

  return (
    cityState && sunrise
      ? (
        <div className="bold" style={styling}>

          <span>
            {cityState}
            {' '}
            |
          </span>
          <span>
            {' '}
            {country}
            {' '}
            |
          </span>
          <span>{` Nascer do sol: ${sunrise} |`}</span>
          <span>{` Pôr do sol: ${sunset} `}</span>

        </div>
      )
      : <h1>Carregando...</h1>
  );
}
