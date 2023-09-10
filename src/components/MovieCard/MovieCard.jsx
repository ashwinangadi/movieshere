import Heart from "../Icons/Heart";
import Cross from "../Icons/Cross";
import { useGlobalContext } from "../../context/Context";
import noImage from "../../assets/noImage.png"

function MovieCard({ movies, svg }) {
  const { setShowModal, setLiked, liked, setMovieID } = useGlobalContext();

  const addToFav = (id) => {
    if (svg === "like") {
      liked.some((item) => item.id === id)
        ? setLiked(
            liked.filter((item) => {
              return item.id !== id;
            })
          )
        : setLiked([...liked, movies]);
    } else {
      setLiked(
        liked.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };

  return (
    <div className="relative flex items-center flex-col justify-center p-2 m-3 rounded-xl shadow-lg w-[280px] md:w-[316px] cursor-pointer hover:scale-105 duration-100">
      <div
        className={` ${
          liked.some((item) => item.id === movies.id)
            ? "fill-red-500"
            : "fill-gray-100"
        } absolute hover:fill-rose-500 top-3 right-3 cursor-pointer ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
        onClick={(e) => {
          e.stopPropagation();
          addToFav(movies.id);
        }}
      >
        {svg === "like" ? (
          <Heart />
        ) : (
          <Cross className="bg-gray-100 rounded-full w-8 h-8" />
        )}
      </div>
      <img
        src={movies.poster_path !== null ?`https://image.tmdb.org/t/p/w500/${movies.poster_path}`: noImage}
        className="h-[300px] w-[270px] md:w-[300px] md:h-[400px] rounded-t-xl"
        onClick={() => {
          setShowModal(true);
          setMovieID(movies.id);
        }}
      />
      <p
        className="text-xl md:text-2xl font-semibold h-[60px] md:h-[80px] mt-2"
        onClick={() => {
          setShowModal(true);
          setMovieID(movies.id);
        }}
      >
        {movies.original_title}
      </p>
    </div>
  );
}

export default MovieCard;
