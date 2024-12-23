import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        movieName:null,
        movieResult:null,

    },
    reducers:{
        toggleGptSearchview:(state)=>{
          state.showGptSearch= !state.showGptSearch
        },
        addGptMovies:(state,action)=>{
            const{movieName,movieResult}=action.payload;

            state.movieName=movieName;
            state.movieResult=movieResult;
        },
       
    }
})
export const {toggleGptSearchview,addGptMovies}=gptSlice.actions;
export default gptSlice.reducer;