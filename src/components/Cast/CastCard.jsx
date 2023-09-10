import React from "react";

const CastCard = ({ cast } ) => {
  const { name, profile_path, character } = cast;
  return (
    <div className="text-center relative w-[100px] h-[150px] shadow-xl flex flex-col justify-center items-center ">
      <img
        src={`https://image.tmdb.org/t/p/original` + `${profile_path}`}
        alt="Cast"
        className="h-[100px] w-[80px] text-center"
      />
      <p className="absolute top-0 text-xs text-center bg-black/50 text-white w-full">
        {name}
      </p>
      <p className="absolute bottom-0 text-xs text-center bg-black/50 text-white w-full">
        {character}
      </p>
    </div>
  );
};

export default CastCard;
