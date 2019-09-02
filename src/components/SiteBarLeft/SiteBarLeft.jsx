import React from 'react';
import css from './SiteBarLeft.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const SiteBarLeft = (props) => {
    let listPages = props.siteBarLeft.listPages.map(item =>
        <NavLink to={`/${item.path}`} activeClassName={css.active}>
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
    listPage: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            page: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

const mapStateToProps = state => {
    return {
        siteBarLeft: state.siteBarLeft,
    }
};
const mapDispatchToProps = () => {
    return {}
};
const ConnectedSiteBarLeft = connect(mapStateToProps, mapDispatchToProps)(SiteBarLeft);

export default ConnectedSiteBarLeft;