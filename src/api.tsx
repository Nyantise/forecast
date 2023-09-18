import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const myparams = {
  appid: import.meta.env.API_KEY,
  units: 'metric',
  lang: 'pt_br'
}

export async function getWeather (city: string){
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {q: city, ...myparams}
    });
    return response.data;

  } catch(error){throw error}
};

export async function getForecast (city: string) {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {q: city, ...myparams}
    });
    return response.data;
    
  } catch(error){throw error}
};
