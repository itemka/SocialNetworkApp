import React from 'react';
import css from './SiteBarLeft.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const SiteBarLeft = (props) => {
    let listPages = props.siteBarLeft.listPages.map(
        item => <NavLink to={`/${item.path}`} activeClassName={css.active}>
                    <div className={css.item}> {`${item.page} (idPage=${item.id})`} </div>
                </NavLink>);
    return (
        <div className={css.SiteBarLeft}>
            <nav>
                {listPages}
            </nav>
        </div>
    );
};

SiteBarLeft.propTypes = {
    listPage: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            page: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default SiteBarLeft;