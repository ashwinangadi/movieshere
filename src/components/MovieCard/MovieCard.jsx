import React from "react";

function MovieCard({ movies }) {
  // console.log("movies",{`https://image.tmdb.org/t/p/w500 ${movies.results[0].poster_path} `})

  return (
    <div className="flex items-center  flex-col justify-center p-2 m-3 rounded-xl shadow-lg w-[316px] cursor-pointer hover:scale-105 duration-100">
      <img
        src={`https://image.tmdb.org/t/p/w500` + `${movies.poster_path}`}
        className="w-[300px] h-[400px]"
      />
      <p className="text-2xl font-semibold h-[80px] mt-2">{movies.original_title}</p>
    </div>
  );
}

export default MovieCard;
