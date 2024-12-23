import { useDispatch } from "react-redux";
import { Api_options } from "../utils/constant";
import { addTvSeries } from "../utils/movieSlice";
import { useEffect } from "react";

const useTvSeries=()=>{
    const dispatch=useDispatch();
    const getTvSeries = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?page=1",
        Api_options
      );
      const json = await data.json();
      //console.log(json);
      dispatch(addTvSeries(json.results)); 
    };
    useEffect(() => {
      getTvSeries()
    }, []);

}

export default useTvSeries;