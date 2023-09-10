import React, { useEffect, useState } from "react";
import Cross from "../Icons/Cross";
import { useGlobalContext } from "../../context/Context";
import axiosFetch from "../../api/axios";
import { minutesToHours } from "../../utility";
import ModalShimmer from "../Shimmer/ModalShimmer";
import CastCard from "../Cast/CastCard";
import Cast from "../Cast/Cast";

const Modal = () => {
  const { setShowModal, movieID, setLoading, loading } = useGlobalContext();
  const [movieModal, setMovieModal] = useState([]);

  const { poster_path, title, release_date, overview, genres, runtime } =
    movieModal;

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `movie/${movieID}`;
      try {
        const response = await axiosFetch.get(url);
        setMovieModal(response.data);
      } catch {
        console.log("error");
      }
    };
    fetchMovies();
  }, [movieID]);

  // console.log("cast", movieCast);
  return (
    <section className="absolute">
      <div
        className="fixed bg-gray-950/60 inset-0 flex items-center justify-center px-3"
        // onClick={() => setShowModal(false)}
      >
        <div className="relative bg-white p-1 rounded-xl flex flex-col max-w-[720px] max-h-[650px]  md:h-fit  shadow-white/50 gap-2 pb-2 overflow-auto">
          <div className="flex flex-col md:flex-row">
            <div
              className="absolute right-0 top-0"
              onClick={() => setShowModal(false)}
            >
              <Cross className="w-8 h-8" />
            </div>
            <span className=" flex justify-center bg-slate-200 rounded-t-xl">
              <img
                src={`https://image.tmdb.org/t/p/original` + `${poster_path}`}
                className="h-[200px] w-[150px] md:min-w-[300px] md:h-[400px] md:rounded-tl-xl "
              />
            </span>
            <div className="px-4 w-full">
              <h1 className="text-xl md:text-3xl font-bold text-center h-16 md:h-24 flex items-center justify-center">
                {title}
              </h1>
              <div className="border  rounded-xl mb-2">
                <span className="flex space-x-5 items-center justify-center border-b p-2">
                  {genres?.slice(0, 4).map((item) => (
                    <p
                      key={item.name}
                      className="text-sm md:text-base border p-0.5 rounded-lg"
                    >
                      {item.name}
                    </p>
                  ))}
                </span>
                <span className="flex justify-center items-center space-x-10 p-2 text-sm md:text-base">
                  <p>{release_date}</p>
                  <p>{minutesToHours(runtime)}</p>
                </span>
              </div>
              <p className=" text-justify text-sm md:text-base ">{overview}</p>
            </div>
          </div>
          <div className="flex items-center justify-center md:w-full">
            <Cast />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
