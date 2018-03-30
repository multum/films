import React from 'react';
import ReactPaginate from 'react-paginate';

import css from './Pagination.css';

export default (props) => {
  return <ReactPaginate disabledClassName={css.disable}
                        previousClassName={css.navBtn}
                        nextClassName={css.navBtn}
                        containerClassName={css.wrap}
                        activeClassName={css.active}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={<a>...</a>}
                        {...props}/>;
}