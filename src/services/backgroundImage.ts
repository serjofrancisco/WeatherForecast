async function getURl() {
    const URL = `https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-US`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data.images[0].url;
    } catch (err) {
      console.log(err);
    }
  }

async function getBackgroundImage() {
    const url = await getURl();
    const imageURL = `https://www.bing.com${url}`;
    return imageURL;
  }