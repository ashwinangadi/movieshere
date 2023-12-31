import MovieCard from "../../components/MovieCard/MovieCard";
import { useGlobalContext } from "../../context/Context";

function Favorites() {
  const { setLiked, liked } = useGlobalContext();

  return (
    <>
      {liked.length > 0 ? (
        <div className="flex flex-wrap items-start justify-center py-5 min-h-screen w-full">
          {liked?.slice(0).map((item) => {
            return (
              <MovieCard
                movies={item}
                key={item.id}
                setLiked={setLiked}
                liked={liked}
                svg="close"
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center min-h-screen text-3xl md:text-5xl lg:text-7xl mt-20">
          You have no Favorites...
        </div>
      )}
    </>
  );
}

export default Favorites;
