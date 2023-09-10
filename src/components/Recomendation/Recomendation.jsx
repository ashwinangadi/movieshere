import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/Context";
import axiosFetch from "../../api/axios";
import MovieCard from "../MovieCard/MovieCard";

import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Recomendation = () => {
  const { liked, likedGenres, search } = useGlobalContext();
  const genres = [
    {
      id: 28,
      name: "Action",
      count: 0,
    },
    {
      id: 12,
      name: "Adventure",
      count: 0,
    },
    {
      id: 16,
      name: "Animation",
      count: 0,
    },
    {
      id: 35,
      name: "Comedy",
      count: 0,
    },
    {
      id: 80,
      name: "Crime",
      count: 0,
    },
    {
      id: 99,
      name: "Documentary",
      count: 0,
    },
    {
      id: 18,
      name: "Drama",
      count: 0,
    },
    {
      id: 10751,
      name: "Family",
      count: 0,
    },
    {
      id: 14,
      name: "Fantasy",
      count: 0,
    },
    {
      id: 36,
      name: "History",
      count: 0,
    },
    {
      id: 27,
      name: "Horror",
      count: 0,
    },
    {
      id: 10402,
      name: "Music",
      count: 0,
    },
    {
      id: 9648,
      name: "Mystery",
      count: 0,
    },
    {
      id: 10749,
      name: "Romance",
      count: 0,
    },
    {
      id: 878,
      name: "Science Fiction",
      count: 0,
    },
    {
      id: 10770,
      name: "TV Movie",
      count: 0,
    },
    {
      id: 53,
      name: "Thriller",
      count: 0,
    },
    {
      id: 10752,
      name: "War",
      count: 0,
    },
    {
      id: 37,
      name: "Western",
      count: 0,
    },
  ];
  const [genreCounted, setGenreCounted] = useState(genres);
  const [mostLikedGenre, setMostLikedGenre] = useState([]);
  const [recomendedMovies, setRecomendedMovies] = useState([]);

  const addGenreCount = () => {
    // Reset all counts to 0
    const updatedArray = genreCounted.map((obj) => ({ ...obj, count: 0 }));
    // Increment counts based on ids in the first array
    likedGenres.forEach((id) => {
      const objectToUpdate = updatedArray.find((obj) => obj.id === id);
      if (objectToUpdate) {
        objectToUpdate.count++;
      }
    });
    setGenreCounted(updatedArray);
  };

  useEffect(() => {
    addGenreCount();
  }, [likedGenres]);

  useEffect(() => {
    // Find the maximum count
    const maxCount = genreCounted.reduce(
      (max, obj) => (obj.count > max ? obj.count : max),
      -Infinity
    );
    if (maxCount > 0) {
      // Find all ids with the maximum count
      const maxCountIds = genreCounted
        .filter((obj) => obj.count === maxCount)
        .map((obj) => obj.id);
      // Set the id with the biggest count to the state, or an empty string if all counts are 0
      setMostLikedGenre(maxCountIds.join(", "));
    } else {
      setMostLikedGenre("");
    }
  }, [genreCounted]);

  useEffect(() => {
    const fetchMovies = async () => {
      const url = "discover/movie";
      const param = { with_genres: mostLikedGenre, adult: true };
      try {
        const response = await axiosFetch(url, param);
        setRecomendedMovies(response.data);
      } catch {
        console.log("error");
      }
    };
    fetchMovies();
  }, [liked]);

  return (
    <div
      className={`flex flex-col my-5 mx-14  md:mx-24 lg:mx-32 ${
        search.length > 0 && "hidden"
      }`}
    >
      <h1 className="text-3xl font-semibold text-start">Recomended movies</h1>
      <div className="flex flex-wrap items-center justify-center">
        {liked.length !== 0 ? (
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              freeMode={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
                1536: {
                  slidesPerView: 5,
                },
              }}
              modules={[FreeMode, Autoplay]}
              className={`mySwiper w-full`}
            >
              {recomendedMovies.results?.map((item) => (
                <SwiperSlide
                  key={item.cast_id}
                  className="flex items-center justify-center"
                >
                  <MovieCard movies={item} key={item.id} svg="like" />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <p className=" font-medium text-xl">
            Get movie recommendations by liking movies
          </p>
        )}
      </div>
    </div>
  );
};

export default Recomendation;
