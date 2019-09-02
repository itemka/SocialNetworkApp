import React from 'react';
import css from './PageProfile.module.css';
import SiteBarLeft from "../SiteBarLeft/SiteBarLeft";
import Posts from "./Posts/Posts";
import SiteBarRight from "../SiteBarRight/SiteBarRight";
import CoverWithProfileInfo from "./CoverWithProfileInfo/CoverWithProfileInfo";

const PageProfile = () => {
    return (
        <div className={css.PageProfile}>

            <CoverWithProfileInfo />
            <SiteBarLeft />
            <Posts />
            <SiteBarRight />

        </div>
    );
};

export default PageProfile;