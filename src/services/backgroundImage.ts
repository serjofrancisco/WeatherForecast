import axios from 'axios';
export default async function getURl() {
    const URL = `https://bing.biturl.top/`;
    try {
      const response = await axios.get(URL);
      const data = response.data;
      return data.url;
    } catch (err) {
      console.log(err);
    }
  }
