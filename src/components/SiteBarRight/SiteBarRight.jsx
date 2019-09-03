import React from 'react';
import css from './SiteBarRight.module.css';
import WindowFriendsContainer from "./WindowFriends/WindowFriendsContainer";

const SiteBarRight = () => {
    return (
        <div className={css.SiteBarRight}>
            <WindowFriendsContainer/>
        </div>
    );
};

export default SiteBarRight;