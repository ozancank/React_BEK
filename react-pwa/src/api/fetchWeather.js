import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c45bb0b4675cd246079c73a754454472";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      lang:"tr",
      APPID: API_KEY,
    },
  });
  return data;
};
