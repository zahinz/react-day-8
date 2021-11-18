import { combineReducers } from "redux";

import searchMovieReducer from "./searchMovieReducer";
import searchMovieDetailsReducer from "./searchMovieDetailsReducer";

// this is used as state
export default combineReducers({
  movie: searchMovieReducer,
  movieDetails: searchMovieDetailsReducer,
});
