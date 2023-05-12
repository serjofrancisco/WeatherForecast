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

  const styling = {
    color: 'black',
    textAlign: 'center',
    marginTop: '15px',
  } as const;

  const selectStyle = {
    color: 'white',
    margin: '5px',
  };

  const buttonTailWindClass = 'bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-lg';
  const selectTailWindClass = 'p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
  return (
    <div style={styling}>
      <h1><b>Escolha um Estado</b></h1>
      <select style={selectStyle} className={selectTailWindClass} onChange={getCities}>
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
                <select style={selectStyle} className={selectTailWindClass} onChange={getCity}>
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
        && (<button className={buttonTailWindClass} type="button" onClick={getCityLocation}>Change</button>)}

    </div>

  );
}
