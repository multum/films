import {
  DELETE_ONE_FILM_REQUEST,
  DELETE_ONE_FILM_SUCCESS,
  DELETE_ONE_FILM_FAILURE,
  FETCH_ONE_FILM_REQUEST,
  FETCH_ONE_FILM_SUCCESS,
  FETCH_ONE_FILM_FAILURE
} from "../constans/films";

const initialState = {
  data: {},
  error: null,
  isLoaded: 0
};

export default function filmReducer(state = initialState, action) {

  if (
    action.type === DELETE_ONE_FILM_REQUEST ||
    action.type === DELETE_ONE_FILM_SUCCESS ||
    action.type === DELETE_ONE_FILM_FAILURE
  ) {
    return state;
  }

  if (action.type === FETCH_ONE_FILM_REQUEST) {
    return {
      ...state,
      error: null,
      isLoaded: 0
    };
  }

  if (action.type === FETCH_ONE_FILM_SUCCESS) {
    const {data} = action;
    return {
      ...state,
      error: null,
      data,
      isLoaded: 1
    };
  }

  if (action.type === FETCH_ONE_FILM_FAILURE) {
    const {error} = action;
    return {
      ...state,
      error,
      data: {},
    };
  }

  return state;
}