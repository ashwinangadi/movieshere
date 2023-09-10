import React, { useContext, useEffect, useState } from "react";
import axiosFetch from "../api/axios";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [movieID, setMovieID] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const url = "trending/movie/day";
      const param = {};
      try {
        const response = await axiosFetch(url, param);
        setMovies(response.data);
      } catch {
        console.log("error");
      }
      setLoading(false);
    };
    fetchMovies();
  }, []);

  return (
    <AppContext.Provider
      value={{
        movies,
        loading,
        liked,
        setLiked,
        showModal,
        setShowModal,
        movieID,
        setMovieID,
        searchedMovie,
        setSearchedMovie,
        search,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
