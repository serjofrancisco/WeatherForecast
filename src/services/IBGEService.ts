const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

async function getStatesFromAPI() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function getCitiesFromAPI(state: string) {
  const URL = `${BASE_URL}/${state}/municipios?view=nivelado`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

// API documentation: https://servicodados.ibge.gov.br/api/docs/localidades
export { getStatesFromAPI, getCitiesFromAPI };
