import {
  DELETE_ALL_FILMS_FAILURE,
  DELETE_ALL_FILMS_REQUEST,
  DELETE_ALL_FILMS_SUCCESS,
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS
} from "../constans/films";

const initialState = {
  totalCount: null,
  films: [],
  limit: 10,
  skip: 0,
  isLoaded: 0
};

export default function filmsReducer(state = initialState, action) {

  if (
    action.type === DELETE_ALL_FILMS_REQUEST ||
    action.type === DELETE_ALL_FILMS_SUCCESS ||
    action.type === DELETE_ALL_FILMS_FAILURE
  ) {
    return state;
  }

  if (action.type === FETCH_FILMS_REQUEST) {
    return {
      ...state,
      isLoaded: 0
    };
  }

  if (action.type === FETCH_FILMS_SUCCESS) {
    const {films, limit, slip, totalCount} = action;
    return {
      ...state,
      films,
      limit,
      slip,
      totalCount,
      isLoaded: 1
    };
  }

  return state;
}

