import React from "react";
import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.newPlayingMovies);
  if (!movies) return ;
  const mainMovie = movies[0];
  console.log(mainMovie);
  const{original_title,overview,id}=mainMovie;
  return (
    <div className="pt-[27%] bg-black md:pt-0 md:bg-transparent">
        <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} />
      
    </div>
  );
};

export default MainContainer;
