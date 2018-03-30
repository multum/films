import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {Async as AutoComplete} from 'react-select';
import 'react-select/dist/react-select.css';

import {debounce} from "../../helpers/common";

import css from './Search.css';
import grid from '../../styles/grid.css';

const radioButtons = [
  {
    label: 'By Title',
    value: 'title'
  },
  {
    label: 'By Stars',
    value: 'stars'
  }
];

class Search extends Component {

  search(input, callback) {
    if (!input || input === '') return callback(null);
    this.loadItems(input, callback);
  }

  loadItems = debounce(function (input, callback) {
    const {searchKey} = this.props;
    this.props.fetchSearchFilms({
      limit: 20,
      searchKey,
      searchValue: input
    })
      .then(({films: options = []}) => {
        callback(null, {options});
      }).catch((err) => callback(err));
  }, this, 200);

  onClick = (value) => this.props.history.push(`/films/${value.title}`);

  changeSearchKey = ({target}) => this.props.setSearchKey(target.value);

  render() {
    const {searchKey} = this.props;
    return (
      <div className={grid.container}>
        <div className={css.wrap}>

          <AutoComplete searchPromptText={`Type '${searchKey}' to search`}
                        className={css.select}
                        placeholder={'Search...'}
                        valueKey={searchKey}
                        labelKey={searchKey}
                        onChange={this.onClick}
                        loadOptions={this.search.bind(this)}
                        autoload={false}
                        onCloseResetsInput={false}
                        cache={false}/>

          <ul className={css.radioButtons}>
            {radioButtons.map((item, index) => {
              return <li key={index}>
                <input type='radio' name='searchKey' id={`searchKey${index}`} value={item.value}
                       defaultChecked={item.value === searchKey}
                       onChange={this.changeSearchKey}/>
                <label htmlFor={`searchKey${index}`}>{item.label}</label>
              </li>;
            })}
          </ul>

        </div>
      </div>
    );
  }
}

Search.propTypes = {
  'fetchSearchFilms': PropTypes.func.isRequired,
  'setSearchKey' : PropTypes.func.isRequired,
  'history': PropTypes.object.isRequired,
  'searchKey': PropTypes.string.isRequired
};

export default withRouter(Search);
