import {
  FETCH_SEARCH_FILMS_REQUEST,
  FETCH_SEARCH_FILMS_SUCCESS,
  FETCH_SEARCH_FILMS_FAILURE,
  SET_SEARCH_KEY
} from "../constans/films";

const initialState = {
  collection: {
    films: [],
    isLoaded: 0,
    error: null,
    searchKey: 'title'
  }
};

export default function searchReducer(state = initialState, action) {

  if (action.type === FETCH_SEARCH_FILMS_REQUEST) {
    return {
      ...state,
      collection: {
        ...state.collection,
        isLoaded: 0
      }
    };
  }

  if (action.type === SET_SEARCH_KEY) {
    const {searchKey} = action;
    return {
      ...state,
      collection: {
        ...state.collection,
        searchKey
      }
    };
  }

  if (action.type === FETCH_SEARCH_FILMS_SUCCESS) {
    const {films} = action;
    return {
      ...state,
      collection: {
        ...state.collection,
        films,
        error: null,
        isLoaded: 1
      }
    };
  }

  if (action.type === FETCH_SEARCH_FILMS_FAILURE) {
    const {error} = action;
    return {
      ...state,
      collection: {
        ...state.collection,
        error,
        isLoaded: 0
      }
    };
  }

  return state;
}

