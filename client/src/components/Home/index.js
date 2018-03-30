import React from 'react';

import typography from '../../styles/typography.css';
import grid from '../../styles/grid.css';
import css from './Home.css';

export default () => {
  return (
    <div className={css.wrap}>
      <div className={grid.container}>
        <h1 className={typography.h1}>Films collection</h1>
        <h3 className={typography.h3}>using React.js, Redux.js, Express.js, Mongoose.js</h3>
      </div>
    </div>
  );
}