import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  //console.log(movies);
  return (
    <div className="px-2 ">
      <h1 className="text-md md:text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((movies) => (
            <MovieCard key={movies.id} posterpath={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
