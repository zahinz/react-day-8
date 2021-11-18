import axios from "axios";
import {
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILED,
  SEARCH_MOVIE_DETAILS,
  SEARCH_MOVIE_DETAILS_FAILED,
  SEARCH_MOVIE_DETAILS_SUCCESS,
} from "../types";
// data is search query
export const searchMovie = (data) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: data,
  });

  try {
    axios
      .get(`https://www.omdbapi.com/?apikey=8aea6d6b&s=${data}&page=2`)
      .then((res) => {
        // console.log("res...", res.data.Search);
        if (res.status === 200 && res.data.Response === "True") {
          dispatch({
            type: SEARCH_MOVIE_SUCCESS,
            payload: res.data.Search,
          });
        } else {
          alert(res.data.Error);
        }
      })
      .catch((error) => {
        console.log("error...", error);
        alert(error);
        dispatch({
          type: SEARCH_MOVIE_FAILED,
          error: error,
        });
      });
  } catch (error) {
    console.log("error...", error);
    dispatch({
      type: SEARCH_MOVIE_FAILED,
      error: error,
    });
  }
};

export const searchMovieDetails = (data) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE_DETAILS,
  });

  try {
    axios
      .get(`https://www.omdbapi.com/?apikey=8aea6d6b&i=${data}`)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: SEARCH_MOVIE_DETAILS_SUCCESS,
            payload: res.data,
          });
        }
      });
  } catch (error) {
    console.log("error2...", error);
    dispatch({
      type: SEARCH_MOVIE_DETAILS_FAILED,
      error: error.resonse.data,
    });
  }
};
