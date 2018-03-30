import {connect} from 'react-redux';
import CreationPanel from '../components/CreationPanel';
import {addOneFilm, sendFile} from '../actions/films';

const mapStateToProps = ({addFilmReducer}) => {
  return addFilmReducer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFilm: (formData) => dispatch(addOneFilm(formData)),
    sendFile: (formData) => dispatch(sendFile(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreationPanel);