import React from 'react';
import {NavLink} from 'react-router-dom';

import css from './Header.css';
import grid from '../../styles/grid.css';

const Header = () => {

  const links = [
    {path: '/', text: 'Home'},
    {path: '/films', text: 'Films'},
    {path: '/creation-panel', text: 'Creation panel'}
  ];

  return (
    <div className={css.wrapper}>
      <div className={grid.container}>
        <div className={css.justify}>
          <NavLink className={css.logo} to={'/'}>
            <div className={css.text}>Films</div>
          </NavLink>
          <ul className={css.navList}>
            {links.map(link => {
              return <li key={link.path}><NavLink exact activeClassName={css.activeLink} to={link.path}>{link.text}</NavLink>
              </li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;