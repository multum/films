const handleErrors = async (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(response.statusText);
};

/**
 * Get array films
 *
 * @returns {promise}
 */
export const fetchFilms = async (queryParams = {}) => {

  let {limit, skip = 0, count = 0, searchKey, searchValue} = queryParams;
  searchValue = searchValue ? `searchValue=${searchValue}&` : '';
  searchKey = searchKey ? `searchKey=${searchKey}&` : '';

  const url = `/api/films?${searchValue}${searchKey}limit=${limit}&skip=${skip}&count=${count}`;

  const response = await fetch(url, {
    method: 'GET'
  });

  return await handleErrors(response);
};

/**
 * Get one film
 *
 * @returns {promise}
 */
export const fetchOneFilm = async (queryParams = {}) => {

  let {searchKey, searchValue, regexp} = queryParams;
  searchKey = searchKey ? `&searchKey=${searchKey}` : '';
  regexp = regexp ? `&regexp=${regexp}` : '';
  const url = `/api/films/${searchValue}${searchKey}${regexp}`;

  const response = await fetch(url, {
    method: 'GET'
  });

  return await handleErrors(response);
};

/**
 * Add one film
 *
 * @returns {promise}
 */
export const addOneFilm = async (formData) => {
  const response = await fetch(`/api/films/add`, {
    method: 'POST',
    body: formData
  });

  return await handleErrors(response);
};

/**
 * Delete one film
 *
 * @returns {promise}
 */
export const deleteFilm = async (id) => {
  const response = await fetch(`/api/films/${id}`, {
    method: 'DELETE'
  });

  return await handleErrors(response);
};

/**
 * Delete All films
 *
 * @returns {promise}
 */
export const deleteAllFilms = async () => {
  const response = await fetch(`/api/films/`, {
    method: 'DELETE'
  });

  return await handleErrors(response);
};

/**
 * Upload file for creating many films
 *
 * @returns {promise}
 */
export const sendFile = async (formData) => {
  const response = await fetch(`/api/films/upload-file`, {
    method: 'POST',
    body: formData
  });

  return await handleErrors(response);
};