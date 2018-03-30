import {
  FETCH_FILMS_REQUEST,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAILURE,

  FETCH_SEARCH_FILMS_REQUEST,
  FETCH_SEARCH_FILMS_SUCCESS,
  FETCH_SEARCH_FILMS_FAILURE,

  DELETE_ONE_FILM_REQUEST,
  DELETE_ONE_FILM_FAILURE,
  DELETE_ONE_FILM_SUCCESS,

  DELETE_ALL_FILMS_REQUEST,
  DELETE_ALL_FILMS_FAILURE,
  DELETE_ALL_FILMS_SUCCESS,

  FETCH_ONE_FILM_REQUEST,
  FETCH_ONE_FILM_SUCCESS,
  FETCH_ONE_FILM_FAILURE,

  SET_SEARCH_KEY,

  ADD_ONE_FILM_REQUEST,
  ADD_ONE_FILM_FAILURE,
  ADD_ONE_FILM_SUCCESS,

  SEND_FILE_REQUEST,
  SEND_FILE_FAILURE,
  SEND_FILE_SUCCESS
} from "../constans/films";

import * as API from '../api/films';

export const fetchOneFilmRequest = () => {
  return {
    type: FETCH_ONE_FILM_REQUEST
  };
};

export const fetchOneFilmSuccess = (data) => {
  return {
    type: FETCH_ONE_FILM_SUCCESS,
    data
  };
};
export const setSearchKey = (searchKey) => {
  return {
    type: SET_SEARCH_KEY,
    searchKey
  };
};
export const fetchOneFilmFailure = (error) => {
  return {
    type: FETCH_ONE_FILM_FAILURE,
    error
  };
};

export const fetchFilmsRequest = () => {
  return {
    type: FETCH_FILMS_REQUEST
  };
};

export const fetchFilmsSuccess = (payload) => {
  return {
    type: FETCH_FILMS_SUCCESS,
    ...payload
  };
};

export const fetchFilmsFailure = (error) => {
  return {
    type: FETCH_FILMS_FAILURE,
    error
  };
};

export const fetchSearchFilmsRequest = () => {
  return {
    type: FETCH_SEARCH_FILMS_REQUEST
  };
};

export const fetchSearchFilmsSuccess = (payload) => {
  return {
    type: FETCH_SEARCH_FILMS_SUCCESS,
    ...payload
  };
};

export const fetchSearchFilmsFailure = (error) => {
  return {
    type: FETCH_SEARCH_FILMS_FAILURE,
    error
  };
};

export const deleteOneFilmRequest = () => {
  return {
    type: DELETE_ONE_FILM_REQUEST
  };
};

export const deleteOneFilmSuccess = () => {
  return {
    type: DELETE_ONE_FILM_SUCCESS
  };
};

export const deleteOneFilmFailure = () => {
  return {
    type: DELETE_ONE_FILM_FAILURE
  };
};

export const deleteAllFilmsRequest = () => {
  return {
    type: DELETE_ALL_FILMS_REQUEST
  };
};

export const deleteAllFilmsSuccess = () => {
  return {
    type: DELETE_ALL_FILMS_SUCCESS
  };
};

export const deleteAllFilmsFailure = () => {
  return {
    type: DELETE_ALL_FILMS_FAILURE
  };
};

export const addFilmRequest = () => {
  return {
    type: ADD_ONE_FILM_REQUEST
  };
};

export const addFilmSuccess = (data) => {
  return {
    type: ADD_ONE_FILM_SUCCESS,
    data
  };
};

export const addFilmFailure = () => {
  return {
    type: ADD_ONE_FILM_FAILURE
  };
};

export const sendFileRequest = () => {
  return {
    type: SEND_FILE_REQUEST
  };
};

export const sendFileSuccess = (data) => {
  return {
    type: SEND_FILE_SUCCESS,
    data
  };
};

export const sendFileFailure = () => {
  return {
    type: SEND_FILE_FAILURE
  };
};

export const fetchFilms = ({limit, skip}) => (dispatch) => {
  dispatch(fetchFilmsRequest());
  return API.fetchFilms({
    limit,
    skip,
    count: 1
  }).then(({films = [], totalCount}) => {
    return dispatch(fetchFilmsSuccess({films, totalCount, skip, limit}));
  })
    .catch((error) => dispatch(fetchFilmsFailure(error)));
};

export const fetchSearchFilms = ({limit, searchKey, searchValue}) => (dispatch) => {
  dispatch(fetchSearchFilmsRequest());
  return API.fetchFilms({
    limit,
    searchKey,
    searchValue,
    count: 0
  }).then(({films = []}) => {
    return dispatch(fetchSearchFilmsSuccess({films, limit}));
  })
    .catch((error) => dispatch(fetchSearchFilmsFailure(error)));
};

export const deleteOneFilm = (id) => dispatch => {
  dispatch(deleteOneFilmRequest());
  return API.deleteFilm(id).then(() => {
    return dispatch(deleteOneFilmSuccess());
  })
    .catch((error) => dispatch(deleteOneFilmFailure(error)));
};

export const deleteAllFilms = () => dispatch => {
  dispatch(deleteAllFilmsRequest());
  return API.deleteAllFilms().then(() => {
    return dispatch(deleteAllFilmsSuccess());
  })
    .catch((error) => dispatch(deleteAllFilmsFailure(error)));
};

export const fetchOneFilm = (name) => (dispatch) => {
  dispatch(fetchOneFilmRequest());
  return API.fetchOneFilm({
    searchValue: name
  }).then((data) => {
    return dispatch(fetchOneFilmSuccess(data));
  })
    .catch((error) => dispatch(fetchOneFilmFailure(error)));
};

export const addOneFilm = (formData) => (dispatch) => {
  dispatch(addFilmRequest());
  return API.addOneFilm(formData).then((data) => {
    return dispatch(addFilmSuccess(data));
  })
    .catch((error) => dispatch(addFilmFailure(error)));
};

export const sendFile = (formData) => (dispatch) => {
  dispatch(sendFileRequest());
  return API.sendFile(formData).then((data) => {
    return dispatch(sendFileSuccess(data));
  })
    .catch((error) => dispatch(sendFileFailure(error)));
};