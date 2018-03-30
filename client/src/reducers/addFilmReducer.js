import {
  ADD_ONE_FILM_REQUEST,
  ADD_ONE_FILM_FAILURE,
  ADD_ONE_FILM_SUCCESS, SEND_FILE_REQUEST, SEND_FILE_SUCCESS
} from "../constans/films";

const initialState = {
  error: null,
  addedFilms: []
};

export default function addFilmReducer(state = initialState, action) {

  if (action.type === ADD_ONE_FILM_REQUEST) {
    return {
      ...state,
      error: null
    };
  }

  if (action.type === ADD_ONE_FILM_SUCCESS) {
    const {data} = action;
    return {
      ...state,
      addedFilms: state.addedFilms.concat(data)
    };
  }

  if (action.type === ADD_ONE_FILM_FAILURE) {
    const {error} = action;
    return {
      ...state,
      error
    };
  }

  if (action.type === SEND_FILE_REQUEST) {
    return {
      ...state,
      error: null
    };
  }
  if (action.type === SEND_FILE_SUCCESS) {
    const {data} = action;
    return {
      ...state,
      addedFilms: state.addedFilms.concat(data)
    };
  }
  return state;
}