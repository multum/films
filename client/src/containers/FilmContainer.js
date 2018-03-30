import Film from '../components/Film';
import {connect} from 'react-redux';

import {fetchOneFilm, deleteOneFilm} from '../actions/films';

const mapStateToProps = ({filmReducer}) => {
  return filmReducer;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOneFilm: (name) => dispatch(fetchOneFilm(name)),
    deleteOneFilm: (id) => dispatch(deleteOneFilm(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
