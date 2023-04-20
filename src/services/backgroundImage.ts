import axios from 'axios';

export default async function getURl() {
  const URL = 'https://bing.biturl.top/';
  try {
    const response = await axios.get(URL);
    const { data } = response;
    return data.url;
  } catch (err) {
    console.log(err);
    return null;
  }
}

// API documentation: https://github.com/TimothyYe/bing-wallpaper
