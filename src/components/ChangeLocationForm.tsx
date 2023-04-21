import {
  ChangeEvent, useEffect, useState, useContext,
} from 'react';
import { MyContext } from '@/context/Context';
import { getStatesFromAPI, getCitiesFromAPI } from '@/services/IBGEService';
import { IIBGEStates, IIBGECities } from '@/Interfaces/IIBGE';
import { getLocationFromName } from '@/services/locationService';

export default function ChangeLocationForm() {
  const { setLocation } = useContext(MyContext);
  const [states, setStates] = useState<IIBGEStates[]>([]);
  const [cities, setCities] = useState<IIBGECities[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const getStates = async () => {
    const statesData = await getStatesFromAPI();
    const statesDataSorted = statesData.sort(
      (a: IIBGEStates, b:IIBGEStates) => a.nome.localeCompare(b.nome),
    );
    setStates(statesDataSorted);
  };

  const getCities = async (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    const citiesData = await getCitiesFromAPI(value);
    const citiesDataSorted = citiesData.sort(
      (a: IIBGECities, b: IIBGECities) => a['municipio-nome'].localeCompare(b['municipio-nome']),
    );
    setCities(citiesDataSorted);
    setSelectedCity(citiesDataSorted[0]['municipio-nome']);
    setSelectedState(value);
  };

  const getCity = async (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedCity(value);
  };

  const getCityLocation = async () => {
    const cityState = (`${selectedCity}-${selectedState}`).toLowerCase();
    const locationData = await getLocationFromName(cityState);
    setLocation(locationData);
  };

  useEffect(() => {
    getStates();
  }, []);
  return (
    <div>
      <h1>Change Location</h1>
      <select onChange={getCities} style={{ color: 'black' }}>
        {states.length > 0
        && states.map((state) => (
          <option
            key={state.id}
            value={state.sigla}
          >
            {state.nome}
          </option>
        ))}
      </select>
      {
            cities.length > 0
           && (
           <select onChange={getCity} style={{ color: 'black' }}>
             {cities.map((city) => (
               <option
                 key={city['municipio-id']}
                 value={city['municipio-nome']}
               >
                 {city['municipio-nome']}
               </option>
             ))}
           </select>
           )
        }

      { selectedCity && selectedState
        && (<button type="button" onClick={getCityLocation}>Change</button>)}

    </div>

  );
}
