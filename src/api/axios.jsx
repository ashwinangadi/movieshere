import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    api_key: "54f631ee802138c28d5a4e1b2e98a89e",
  },
});

export default axiosFetch;
