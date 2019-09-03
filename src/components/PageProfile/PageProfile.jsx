import React from 'react';
import css from './PageProfile.module.css';
import SiteBarRight from "../SiteBarRight/SiteBarRight";
import CoverWithProfileInfo from "./CoverWithProfileInfo/CoverWithProfileInfo";
import SiteBarLeftContainer from "../SiteBarLeft/SiteBarLeftContainer";
import PostsContainer from "./Posts/PostsContainer";

const PageProfile = () => {
    return (
        <div className={css.PageProfile}>

            <CoverWithProfileInfo/>
            <SiteBarLeftContainer/>
            <PostsContainer/>
            <SiteBarRight/>

        </div>
    );
};

export default PageProfile;