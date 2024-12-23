import { useDispatch } from "react-redux";
import { Api_options } from "../utils/constant";
import { addNewMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNewMovies=()=>{
    const dispatch=useDispatch();
    const getNewMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        Api_options
      );
      const json = await data.json();
      //console.log(json);
      dispatch(addNewMovies(json.results)); 
    };
    useEffect(() => {
      getNewMovies()
    }, []);

}

export default useNewMovies;