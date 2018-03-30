import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MosaicFilms from '../MosaicFilms';

import uiKit from '../../styles/uikit.css';
import grid from '../../styles/grid.css';
import typography from '../../styles/typography.css';
import css from './CreationPanel.css';

export default class CreationPanel extends Component {

  handlerSubmit(event, dispatch) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    dispatch(data).then(() => {
      this.clearForm(form);
    });
  }

  clearForm(form) {
    const inputs = [...form.querySelectorAll('input, textarea')];
    inputs.forEach(input => input.value = '');
  }

  onSubmit = (event) => {
    this.handlerSubmit(event, this.props.addFilm);

  };

  onSubmitFile = (event) => {
    this.handlerSubmit(event, this.props.sendFile);
  };

  render() {
    return (
      <div className={css.wrap}>
        <div className={grid.container}>
          <h2 className={typography.h2}>Add a new film</h2>
          <div className={css.flex}>
            <div className={css.col}>
              <form onSubmit={this.onSubmit}>
                <p className={typography.paragraph}>Write in all the fields</p>
                <input className={uiKit.input} type='text' name='title' placeholder='Title' required={true}/>
                <input className={uiKit.input} type='text' name='release year' placeholder='Release Year'
                       required={true}/>
                <input className={uiKit.input} type='text' name='format' placeholder='Format' required={true}/>
                <textarea className={uiKit.textarea} type='text' name='stars' placeholder='Stars(separate with a comma)'
                          required={true}/>
                <button className={uiKit.blueButton} type='submit'>Submit</button>
              </form>
              <form onSubmit={this.onSubmitFile}>
                <p className={typography.paragraph}>... or upload a file with data</p>
                <div>
                  <input type='file' name='films' required={true}/>
                </div>
                <button className={uiKit.blueButton} type='submit'>Submit</button>
              </form>
            </div>
            <div className={css.col}>
              {this.props.addedFilms.length ?
                <MosaicFilms title={'Uploaded films:'} films={this.props.addedFilms}/> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreationPanel.propTypes = {
  'addFilm': PropTypes.func.isRequired,
  'sendFile': PropTypes.func.isRequired,
  'addedFilms': PropTypes.arrayOf(PropTypes.object).isRequired,
  'error': PropTypes.object
};