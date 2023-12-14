import axios from "axios";

const API_KEY = "d96a10d32bmsh5333b5e3bc56f9ep12abe6jsnd9f39f91f2d7";

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
