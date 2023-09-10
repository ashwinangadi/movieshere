import Cross from "../Icons/Cross";
import { useGlobalContext } from "../../context/Context";
import axiosFetch from "../../api/axios";
import { minutesToHours } from "../../utility";
import Cast from "../Cast/Cast";
import noImage from "../../assets/noImage.png";
import { useEffect, useState } from "react";

const Modal = () => {
  const { setShowModal, movieID } = useGlobalContext();
  const [movieModal, setMovieModal] = useState([]);

  const { poster_path, title, release_date, overview, genres, runtime } =
    movieModal;

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `movie/${movieID}`;
      try {
        const response = await axiosFetch(url);
        setMovieModal(response.data);
      } catch {
        console.log("error");
      }
    };
    fetchMovies();
  }, [movieID]);

  return (
    <section className="absolute z-50">
      <div
        className="fixed bg-gray-950/60 inset-0 flex items-center justify-center px-3"
        // onClick={() => setShowModal(false)}
      >
        <div className="relative bg-white p-1 rounded-xl flex flex-col max-w-[720px] max-h-[650px]  md:h-fit  shadow-white/50 gap-2 pb-2 overflow-auto scrollbar-hide">
          <div className="flex flex-col md:flex-row">
            <div
              className="absolute right-0 top-0"
              onClick={() => setShowModal(false)}
            >
              <Cross className="w-8 h-8 cursor-pointer" />
            </div>
            <span className=" flex justify-center bg-slate-200 rounded-t-xl">
              <img
                src={
                  poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noImage
                }
                className="h-[200px] w-[150px] md:min-w-[300px] md:h-[400px] md:rounded-tl-xl "
              />
            </span>
            <div className="px-4 w-full ">
              <h1 className="text-xl md:text-3xl font-bold text-center h-16 md:h-24 flex items-center justify-center">
                {title}
              </h1>
              <div className="border rounded-xl mb-2 shadow-inner shadow-black">
                <span className="flex space-x-5 items-center justify-center border-b p-2">
                  {genres?.slice(0, 4).map((item) => (
                    <p
                      key={item.name}
                      className="text-sm md:text-base border p-0.5 rounded-lg shadow-md"
                    >
                      {item.name}
                    </p>
                  ))}
                </span>
                <span className="flex justify-center items-center space-x-10 p-2 text-sm md:text-base ">
                  <p className="border p-0.5 rounded-lg shadow-md">
                    {release_date}
                  </p>
                  <p className="border p-0.5 rounded-lg shadow-md">
                    {minutesToHours(runtime)}
                  </p>
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
