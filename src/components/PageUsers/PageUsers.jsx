import React from 'react';
import css from './PageUsers.module.css';
import SiteBarLeftContainer from "../SiteBarLeft/SiteBarLeftContainer";
import UsersContainer from "./Users/UsersContainer";
import SiteBarRight from "../SiteBarRight/SiteBarRight";

const PageUsers = () => {
    return (
        <div className={css.PageUsers}>

            <SiteBarLeftContainer/>

            <div className={css.UsersContainer}>
                <UsersContainer/>
            </div>

            <SiteBarRight/>

        </div>
    );
};

export default PageUsers;