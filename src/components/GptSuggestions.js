import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { movieName, movieResult } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="bg-black text-white">
      {movieName.map((movieName,index) => (
        <MovieList key={movieName} title={movieName} movies={movieResult[index]} />
      ))}
    </div>
  );
};

export default GptSuggestions;
