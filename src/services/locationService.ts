const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';

async function getLatitudelongitude(lat: string, lon: string) {
    //lat = latitude, lon = longitude, cnt = number of days, appid = API key 
    const URL = `${BASE_URL}?lat=${lat}&lon=${lon}&cnt=3&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
    try{
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    }catch(err){
     console.log(err);
    }
}
