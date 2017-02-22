//84f784f2ccd819e05e81a4b9dcad991f
import axios from 'axios';

const API_KEY = '84f784f2ccd819e05e81a4b9dcad991f';
//const ROOT_URL = `http://samples.openweathermap.org/data/2.5/weather?&appid=${API_KEY}`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export  function fetchWeather(city){

const url = `${ROOT_URL}&q=${city},us`;
const request = axios.get(url);


return {

  type : FETCH_WEATHER,
  payload: request

};
}
