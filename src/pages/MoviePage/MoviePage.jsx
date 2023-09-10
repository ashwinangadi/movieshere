// import MovieCard from "../../components/Cards/MovieCard";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useGlobalContext } from "../../context/Context";
import Shimmer from "../../components/Shimmer/Shimmer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Recomendation from "../../components/Recomendation/Recomendation";

const MoviePage = () => {
  const { movies, loading, setLiked, liked, search, searchedMovie } =
    useGlobalContext();
  if (loading) {
    return <Shimmer />;
  }

  return (
    <>
      <SearchBar />
      <Recomendation />
      {!search.length > 0 ? (
        <>
          <div className="flex flex-col my-5">
            <h1 className="text-2xl font-semibold text-start ms-14  md:ms-24 lg:ms-32">
              Trending Movies
            </h1>
            <div className="flex flex-wrap items-center justify-center">
              {movies.results?.slice(0).map((item) => {
                return <MovieCard movies={item} key={item.id} svg="like" />;
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col my-5">
            <h1 className="text-2xl font-semibold text-start ms-14  md:ms-24 lg:ms-32">
              Search Results
            </h1>
            <div className="flex flex-wrap items-center justify-center">
              {searchedMovie.results?.slice(0).map((item) => {
                return <MovieCard movies={item} key={item.id} svg="like" />;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MoviePage;
