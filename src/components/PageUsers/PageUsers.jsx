import React from 'react';
import css from './PageUsers.module.css';
import SiteBarLeftContainer from "../SiteBarLeft/SiteBarLeftContainer";
import UsersContainer from "./Users/UsersContainer";

const PageUsers = () => {
    return (
        <div className={css.PageUsers}>

            <SiteBarLeftContainer/>     <UsersContainer/>

        </div>
    );
};

export default PageUsers;