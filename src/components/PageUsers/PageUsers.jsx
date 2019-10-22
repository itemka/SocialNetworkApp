import React from 'react';
import css from './PageUsers.module.css';
import SiteBarLeftContainer from "../SiteBarLeft/SiteBarLeftContainer";
import UsersContainer from "./Users/UsersContainer";
import SiteBarRightContainer from "../SiteBarRight/SiteBarRightContainer";


const PageUsers = () => {
    return (
        <div className={css.PageUsers}>
            <div>
                <SiteBarLeftContainer/>
            </div>
            <div className={css.UsersContainer}>
                <UsersContainer/>
            </div>
            <div className={css.SiteBarRight}>
                <SiteBarRightContainer/>
            </div>
        </div>
    );
};

export default PageUsers;