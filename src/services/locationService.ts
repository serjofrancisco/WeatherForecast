const BASE_URL = 'https://api.opencagedata.com/geocode/v1/json';

async function getLocationFromLatitudeLongitute(lat: number, lon: number) {
  const URL = `${BASE_URL}?q=${lat}+${lon}&language=pt-BR&pretty=1&key=${process.env.NEXT_PUBLIC_LOCATION_API_KEY}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results[0];
  } catch (err) {
    console.log(err);
    return null;
  }
}

async function getLocationFromName(name: string) {
  const URL = `${BASE_URL}?q=${name}&language=pt-BR&pretty=1&key=${process.env.NEXT_PUBLIC_LOCATION_API_KEY}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results[0];
  } catch (err) {
    console.log(err);
    return null;
  }
}

export { getLocationFromLatitudeLongitute, getLocationFromName };

// API documentation: https://opencagedata.com/api
