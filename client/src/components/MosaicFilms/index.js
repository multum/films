import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import typography from '../../styles/typography.css';
import css from './MosaicFilms.css';

const MosaicFilms = (props) => {
  return (
    <div className={css.wrap}>
      <p className={typography.paragraph}>{props.title}</p>
      <div className={css.scrollContainer}>
        <ul>
          {props.films.reverse().map(film => {
            return <li key={film._id} className={typography.h3}><NavLink
              to={`/films/${film.title}`}>{film.title}</NavLink></li>;
          })}
        </ul>
      </div>
    </div>
  );
};

MosaicFilms.propTypes = {
  'films': PropTypes.arrayOf(PropTypes.object).isRequired,
  'title': PropTypes.string
};

export default MosaicFilms;

