import Search from '../components/Search';
import {connect} from 'react-redux';

import {fetchSearchFilms, setSearchKey} from '../actions/films';

const mapStateToProps = ({searchReducer}) => {
  return {...searchReducer.collection};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchFilms: (queryParams) => dispatch(fetchSearchFilms(queryParams)),
    setSearchKey: (key) => dispatch(setSearchKey(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
