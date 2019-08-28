import React from 'react';
import css from './SiteBarRight.module.css';
import WindowFriends from "./WindowFriends/WindowFriends";
import PropTypes from 'prop-types';

const SiteBarRight = () => {
    return (
        <div className={css.SiteBarRight}>
            <WindowFriends />
        </div>
    );
};

SiteBarRight.propTypes = {
    profiles: PropTypes.arrayOf().isRequired,
};

export default SiteBarRight;