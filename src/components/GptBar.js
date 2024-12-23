import React, { useRef } from "react";
//import openai from "../utils/openai";
import axios from "axios";
import { Api_options } from "../utils/constant";
import { addGptMovies } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptBar = () => {
  const searchTeaxt = useRef();
  const dispatch = useDispatch();
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      Api_options
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchBtn = async () => {
    console.log(searchTeaxt.current.value);
    // const gptQuery =
    //   "Act as a movie recommondation system and suggest some movies for query" +
    //   searchTeaxt.current.value +
    //   "Only give me name of 5 movies , comma seperated like the example result ahead. Example: Bahubali,Don,Salar,Kgf,kalki";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
    console.log("loading");
    const response = await axios({
      url:
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" +
        process.env.REACT_APP_AI_KEY,
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text:
                  " Act as a movie recommondation system and suggest some movuies for query" +
                  searchTeaxt.current.value +
                  "Only give me name of 5 movies , comma seperated like the example result ahead. Example: Bahubali,Don,Salar,Kgf,kalki ",
              },
            ],
          },
        ],
      },
    });
    const movieRes =
      response.data?.candidates[0].content?.parts[0]?.text.split(",");
    console.log(movieRes);
    const promiseArray = movieRes.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGptMovies({ movieName: movieRes, movieResult: tmdbResults }));
  };
  // async function generateAns() {

  // }
  return (
    <div className="flex items-center justify-center pt-[15%] md:pt-[10%] px-4 ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-4 w-full max-w-md  bg-gray-800 rounded-md shadow-lg flex     gap-2"
      >
        <input
          ref={searchTeaxt}
          type="text"
          placeholder="What would you watch?"
          className="p-2 flex-grow rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          onClick={handleGptSearchBtn}
          className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GptBar;
