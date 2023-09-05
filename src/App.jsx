import "./App.css";
import Favorites from "./components/Favorites/Favorites";
import MovieCard from "./components/MovieCard/MovieCard";
import Shimmer from "./components/Shimmer/Shimmer";
import { useGlobalContext } from "./context/Context";

function App() {
  const { movies, loading, setLiked, liked } = useGlobalContext();

  if (loading) {
    return <Shimmer />;
  }
  return (
    <>
      <div className="flex flex-wrap items-center justify-center py-5">
        {movies.results?.slice(0).map((item) => {
          return (
            <MovieCard
              movies={item}
              key={item.id}
              setLiked={setLiked}
              liked={liked}
              svg="like"
            />
          );
        })}

        <Favorites />
      </div>
    </>
  );
}

export default App;