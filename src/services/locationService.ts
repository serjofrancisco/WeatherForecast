const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getLatitudelongitude(lat: number, lon: number) {
    //lat = latitude, lon = longitude, cnt = number of days, appid = API key 
    const URL = `${BASE_URL}?lat=${lat}&lon=${lon}&cnt=3&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(process.env.NEXT_PUBLIC_WEATHER_API_KEY)
        console.log(data)
        return data;
    }catch(err){
     console.log(err);
    }
}

export default getLatitudelongitude;