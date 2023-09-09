import Heart from "../Icons/Heart";
import Cross from "../Icons/Cross";

function MovieCard({ movies, setLiked, liked, svg }) {
  const addToFav = (id) => {
    if (svg === "like") {
      liked.some((item) => item.id === id)
        ? alert("Its already your favourite!")
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
        } absolute hover:fill-rose-500 top-2 right-2 cursor-pointer ease-in-out hover:-translate-y-1 hover:scale-110 duration-300`}
        onClick={(e) => {
          e.stopPropagation();
          addToFav(movies.id);
        }}
      >
        {svg === "like" ? <Heart /> : <Cross />}
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500` + `${movies.poster_path}`}
        className="h-[300px] w-[270px] md:w-[300px] md:h-[400px] rounded-xl"
      />
      <p className="text-xl md:text-2xl font-semibold h-[60px] md:h-[80px] mt-2">
        {movies.original_title}
      </p>
    </div>
  );
}

export default MovieCard;
