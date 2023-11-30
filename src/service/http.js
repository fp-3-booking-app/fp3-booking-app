import axios from "axios";

const API_KEY = "49cfda4ac2mshce33f289e3c4c15p171c0ejsn1cc7bbf21637";

const baseUrl = process.env.REACT_APP_BASE_API_URL;


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
