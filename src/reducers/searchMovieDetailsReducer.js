import {
  SEARCH_MOVIE_DETAILS,
  SEARCH_MOVIE_DETAILS_SUCCESS,
  SEARCH_MOVIE_DETAILS_FAILED,
} from "../types";

const defaultState = () => ({
  isLoading: false,
  data: {},
  error: null,
});

const searchMovieDetailsReducer = (state, action) => {
  if (state === undefined) {
    return defaultState();
  }

  switch (action.type) {
    case SEARCH_MOVIE_DETAILS:
      return {
        isLoading: true,
        data: {},
        error: null,
      };

    case SEARCH_MOVIE_DETAILS_SUCCESS:
      return {
        isLoading: false,
        data: action.payload,
        error: null,
      };

    case SEARCH_MOVIE_DETAILS_FAILED:
      return {
        isLoading: false,
        data: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default searchMovieDetailsReducer;
