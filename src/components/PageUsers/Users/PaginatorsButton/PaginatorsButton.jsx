import React from 'react';
import css from './PaginatorsButton.module.css';

export const PaginatorsButton = ({pageNumber, currentPage, callback}) => {
    return (
        <button onClick={() => callback(pageNumber)}
                className={currentPage === pageNumber ? `${css.buttons} ${css.buttonUserFollowed}` : `${css.buttons} ${css.buttonNoActive}`}>
            {pageNumber}
        </button>
    )
};