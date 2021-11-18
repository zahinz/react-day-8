import {
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_FAILED,
} from "../types";

const defaultState = () => ({
  isLoading: false,
  data: [{}],
  error: null,
});

const searchMovieReducer = (state, action) => {
  if (state === undefined) {
    return defaultState();
  }

  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        isLoading: true,
        data: [{}],
        error: null,
      };

    case SEARCH_MOVIE_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        error: null,
      };

    case SEARCH_MOVIE_FAILED:
      return {
        isLoading: false,
        data: [{}],
        error: action.error,
      };

    default:
      return state;
  }
};

export default searchMovieReducer;
