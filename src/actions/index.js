import axios from 'axios'

const API_KEY = '95e206e2aff066eb7af648c8aa4833a7'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)

  // console.log('Request', request)
  

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}