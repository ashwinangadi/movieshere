import React, { useContext, useEffect, useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NGY2MzFlZTgwMjEzOGMyOGQ1YTRlMWIyZTk4YTg5ZSIsInN1YiI6IjY0ZjQ4MDQ2NWYyYjhkMDBlMTJjMTRiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bs7_5xibU50GGgeClx9xG7T-liyB5v_r4EMSv4Us5do",
    },
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", options)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((response) => setMovies(response))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
        console.log("fetched");
      });
  }, []);

  //   console.log(movies);
  return (
    <AppContext.Provider value={{ movies, loading, error, liked, setLiked }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
