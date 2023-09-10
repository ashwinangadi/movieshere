import axios from "axios";

const API_KEY = "54f631ee802138c28d5a4e1b2e98a89e";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: API_KEY,
  },
});

const axiosFetch = (endpoint, params = {}) => {
  const mergedParams = {
    ...params,
  };
  return axiosInstance.get(endpoint, {
    params: mergedParams,
  });
};

export default axiosFetch;
