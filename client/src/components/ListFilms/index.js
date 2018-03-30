import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ListFilmsItem from '../ListFilmsItem';
import Pagination from '../Pagination';

import uiKit from '../../styles/uikit.css';
import grid from '../../styles/grid.css';
import css from './ListFilms.css';

export default class ListFilms extends Component {
  pageSelected = 0;

  componentDidMount() {
    this.fetchFilms();
  }

  fetchFilms() {
    const {limit} = this.props;
    const skip = limit * this.pageSelected;
    return this.props.fetchFilms({limit, skip});
  }

  async handlePageClick({selected}) {
    this.pageSelected = selected;
    this.fetchFilms();
  }

  deleteFilm = async (id, deleteCallback) => {
    const deleted = await this.props.deleteOneFilm(id);
    if (deleted) {
      if (this.props.films.length === 1 && this.pageSelected > 0) {
        this.pageSelected = this.pageSelected - 1;
      }
      (deleteCallback || function () {})();
      this.fetchFilms();
    }
  };

  deleteAll = async () => {
    await this.props.deleteAll();
    this.fetchFilms();
  };

  render() {
    const {limit, totalCount} = this.props;
    const pageCount = (totalCount | 0) / limit;

    const isLoaded = this.props.films && this.props.films.length;
    const isEmpty = this.props.isLoaded && totalCount === 0;
    return (
      <div>
        <div className={css.wrapper}>
          <div className={grid.container}>
            {isLoaded ? <div className={css.content}>
              <div className={classNames(uiKit.blueButton, css.button)} onClick={this.deleteAll}>
                <span>Delete All</span>
              </div>
              <div className={css.items}>
                {this.props.films.map(item => {
                  return <ListFilmsItem key={item._id} {...item} onClick={this.deleteFilm}/>;
                })}
              </div>

              <Pagination
                forcePage={this.pageSelected}
                pageCount={pageCount}
                onPageChange={this.handlePageClick.bind(this)}
              />
            </div> : ''}
            {isEmpty ? <div className={css.empty}>Collection is empty</div> : ''}
          </div>
        </div>
      </div>
    );
  }
};

ListFilms.propTypes = {
  'films': PropTypes.arrayOf(PropTypes.object).isRequired,
  'limit': PropTypes.number.isRequired,
  'totalCount': PropTypes.number,
  'fetchFilms': PropTypes.func.isRequired,
  'deleteOneFilm': PropTypes.func.isRequired,
  'deleteAll': PropTypes.func.isRequired,
  'isLoaded': PropTypes.number.isRequired
};
