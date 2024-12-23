import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.newPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-72 pl-4 md:pl-10 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.newPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"Tv Series"} movies={movies.tvSeries} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
