import { useDispatch } from "react-redux";
import { Api_options } from "../utils/constant";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRated=()=>{
    const dispatch=useDispatch();
    const getTopRated = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        Api_options
      );
      const json = await data.json();
      //console.log(json);
      dispatch(addTopRated(json.results)); 
    };
    useEffect(() => {
      getTopRated()
    }, []);

}

export default useTopRated;