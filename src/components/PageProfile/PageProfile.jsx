import React from 'react';
import css from './PageProfile.module.css';
import CoverWithProfileInfo from "./CoverWithProfileInfo/CoverWithProfileInfo";
import SiteBarLeftContainer from "../SiteBarLeft/SiteBarLeftContainer";
import PostsContainer from "./Posts/PostsContainer";
import SiteBarRightContainer from "../SiteBarRight/SiteBarRightContainer";

const PageProfile = () => {
    return (
        <div className={css.PageProfile}>
            <CoverWithProfileInfo/>
            <div className={css.AfterCover}>
                <SiteBarLeftContainer/>
                <PostsContainer/>
                <SiteBarRightContainer/>
            </div>
        </div>
    );
};

export default PageProfile;