import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';
import closeSvg from '../../svg/close-button.svg';

import css from './ListFilmsItem.css';
import typography from '../../styles/typography.css'

export default class ListFilmsItem extends PureComponent {
  onDelete() {
    this.elDOM.classList.add(css.deleted)
  }
  render() {
    const {title, format, _id: id} = this.props;
    return (
      <div className={css.wrap} ref={el => this.elDOM = el}>
        <NavLink to={`/films/${title}`} className={css.inner}>
          <h3 className={typography.h3}>{title}</h3>
          <h4 className={typography.h4}>Format: {format}</h4>
        </NavLink>
        <div className={css.close} onClick={this.props.onClick.bind(null, id, this.onDelete.bind(this))}>
          <img src={closeSvg} alt=""/>
        </div>
      </div>
    );
  }
}