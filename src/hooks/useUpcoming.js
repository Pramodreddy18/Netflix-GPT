import { useDispatch } from "react-redux";
import { Api_options } from "../utils/constant";
import { addUpcoming } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcoming=()=>{
    const dispatch=useDispatch();
    const getUpcoming = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        Api_options
      );
      const json = await data.json();
      //console.log(json);
      dispatch(addUpcoming(json.results)); 
    };
    useEffect(() => {
      getUpcoming()
    }, []);

}

export default useUpcoming;