import React from "react";
import Header from "./Header";
import useNewMovies from "../hooks/useNewMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import useTvSeries from "../hooks/useTvSeries";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptView = useSelector((store) => store.gpt.showGptSearch);

  useNewMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  useTvSeries();
  return (
    <div>
      <Header />
      {showGptView ? (
        <GptSearch  />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
