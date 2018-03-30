import Films from '../components/ListFilms';
import {connect} from 'react-redux';

import {fetchFilms, deleteOneFilm, deleteAllFilms} from '../actions/films';

const mapStateToProps = ({filmsReducer}) => {
  return filmsReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFilms: (queryParams) => dispatch(fetchFilms(queryParams)),
    deleteAll: () => dispatch(deleteAllFilms()),
    deleteOneFilm: (id) => dispatch(deleteOneFilm(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Films);
