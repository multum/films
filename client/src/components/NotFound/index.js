import React from 'react';

import typography from '../../styles/typography.css';
import grid from '../../styles/grid.css';
import css from './NotFound.css';

export default () => {
  return (
    <div className={css.wrap}>
      <div className={grid.container}>
        <h1 className={typography.h1} style={{fontSize: '100px'}}>404</h1>
        <h3 className={typography.h3}>page</h3>
      </div>
    </div>
  );
}