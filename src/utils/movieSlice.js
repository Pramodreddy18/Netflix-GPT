import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    newPlayingMovies: null,
    trailerVideo:null,
  },
  reducers: {
    addNewMovies: (state, action) => {
      state.newPlayingMovies = action.payload;
    },
    addTrailerVideo:(state,action)=>{
      state.trailerVideo=action.payload;
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload;
    },
    addTopRated:(state,action)=>{
      state.topRated=action.payload;
    },
    addUpcoming:(state,action)=>{
      state.upcoming=action.payload;
    },
    addTvSeries:(state,action)=>{
      state.tvSeries=action.payload;
    },
    
  },
});
export const{addNewMovies , addTrailerVideo, addPopularMovies,addTopRated,addUpcoming,addTvSeries}=movieSlice.actions;
export default movieSlice.reducer;