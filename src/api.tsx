import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;
const myparams = {
  appid: import.meta.env.VITE_API_KEY,
  units: 'metric',
}

export async function getWeather (city: string){
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {q: city, ...myparams}});
    return response.data;

  } catch(error){throw error}
};

export async function getForecast (city: string) {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {q: city, ...myparams}});
    return response.data;
    
  } catch(error){throw error}
};
