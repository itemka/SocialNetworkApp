import React from 'react';
import css from './SiteBarRight.module.css';
import WindowFriends from "./WindowFriends/WindowFriends";

const SiteBarRight = () => {
    return (
        <div className={css.SiteBarRight}>
            <WindowFriends />
        </div>
    );
};

export default SiteBarRight;