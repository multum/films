import React, {Component} from 'react';
import PropTypes from 'prop-types';

import css from './Film.css';
import grid from '../../styles/grid.css';
import typography from '../../styles/typography.css';

export default class Film extends Component {
  componentDidMount() {
    const {name} = this.props.match.params;
    this.props.fetchOneFilm(name);
  }

  componentWillReceiveProps(nextProps) {
    const prevName = this.props.match.params.name;
    const nextName = nextProps.match.params.name;
    if (prevName !== nextName) this.props.fetchOneFilm(nextName);
  }

  parseStars(string) {
    return string.split(',').map(star => {
      const name = star.trim();
      return <li key={name}>{name}</li>;
    });
  }

  render() {
    const {data, error, isLoaded} = this.props;
    const notFound = error || (isLoaded && !data.title);
    return (
      <div className={css.wrap}>
        <div className={grid.container}>
          {isLoaded ? <div>
            <div className={css.title}>{data.title}</div>
            <div className={css.blueCanvas}>
              <div className={css.format}><span>Format: </span>{data.format}</div>
              <div className={css.release}><span>Release Year: </span>{data['release year']}</div>
            </div>
            <div className={css.stars}>
              <p>Stars</p>
              <ul>{this.parseStars(data.stars)}</ul>
            </div>
          </div> : ''}
          {notFound ? <div className={typography.h1}>Not Found</div> : ''}
        </div>
      </div>
    );
  }
};

Film.propTypes = {
  'data': PropTypes.object.isRequired,
  'match': PropTypes.object.isRequired,
  'isLoaded': PropTypes.number.isRequired,
  'fetchOneFilm': PropTypes.func.isRequired,
  'error': PropTypes.object
};