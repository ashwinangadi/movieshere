import React, { useEffect, useState } from "react";
import Search from "../Icons/Search";
import Cross from "../Icons/Cross";
import axiosFetch from "../../api/axios";
import { useGlobalContext } from "../../context/Context";

const SearchBar = () => {
  const { searchedMovie, setSearchedMovie, search, setSearch } =
    useGlobalContext();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchSearchedMovie = async () => {
      const url = "search/movie";
      const param = { query: search };
      try {
        const response = await axiosFetch(url, param);
        console.log(response.data);
        setSearchedMovie(response.data);
      } catch {
        console.log("error");
      }
    };
    fetchSearchedMovie();
  }, [search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Set the debounced value after a delay (e.g., 500 milliseconds)
      setSearch(inputValue);
    }, 500); // Adjust the debounce delay as needed

    // Clear the timer if the input value changes before the delay expires
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <div className="flex justify-center items-center my-10">
      <div className=" lg:w-[40%] md:w-[60%] w-[70%] rounded-lg border border-black flex items-center justify-center p-0.5">
        <input
          type="text"
          value={inputValue}
          placeholder="Search a movie..."
          className=" rounded-lg w-full h-10 px-8 focus:outline-none "
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <span className=" w-[80px] h-full flex items-center me-2">
          <Cross
            className="h-10 w-10 border-e me-1 cursor-pointer"
            onClick={() => {
              setInputValue("");
              setSearch("");
            }}
          />

          <Search
            className="h-5 w-6 cursor-pointer"
            onClick={() => setSearch(inputValue)}
          />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
