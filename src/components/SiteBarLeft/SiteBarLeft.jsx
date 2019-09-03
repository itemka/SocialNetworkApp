import React from 'react';
import css from './SiteBarLeft.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const SiteBarLeft = (props) => {
    let listPages = props.siteBarLeft.listPages.map(item =>
        <NavLink key={item.id} to={`/${item.path}`} activeClassName={css.active}>
            <div className={css.item}> {`(idPage=${item.id}) ${item.page}`} </div>
        </NavLink>
    );
    return (
        <div className={css.SiteBarLeft}>
            <nav>
                {listPages}
            </nav>
        </div>
    );
};

SiteBarLeft.propTypes = {
    siteBarLeft: PropTypes.shape({
        listPage: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                page: PropTypes.string.isRequired,
                path: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    }).isRequired,
    // siteBarLeft: PropTypes.shape({}).isRequired,
};

export default SiteBarLeft;