import axios from "axios";

const API_KEY = "49cfda4ac2mshce33f289e3c4c15p171c0ejsn1cc7bbf21637";
const BASE_URL = "https://priceline-com-provider.p.rapidapi.com";

const baseUrl = process.env.REACT_APP_BASE_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;
const apiHost = process.env.REACT_APP_API_HOST;

const http = axios.create({
  baseURL: baseUrl,
  headers: {
   "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
  },
});

const parseResponse = (response) => {
  return {
    data: response.data,
  };
};

http.interceptors.response.use(
  (response) => {
    return parseResponse(response);
  },
  (error) => {
    console.log("API EXPIRED")
  }
);

export default http;
