import React from 'react';
import css from './PageProfile.module.css';
import SiteBarLeft from "../SiteBarLeft/SiteBarLeft";
import Posts from "./Posts/Posts";
import SiteBarRight from "../SiteBarRight/SiteBarRight";
import CoverWithProfileInfo from "./CoverWithProfileInfo/CoverWithProfileInfo";
import PropTypes from 'prop-types';

const PageProfile = (props) => {
    return (
        <div className={css.PageProfile}>

            <CoverWithProfileInfo profiles={props.pageProfile.profiles}/>
            <SiteBarLeft siteBarLeft={props.siteBar.siteBarLeft}/>
            <Posts posts={props.pageProfile.posts} profiles={props.pageProfile.profiles}
                   functionToProcessingState={props.functionToProcessingState}/>
            <SiteBarRight profiles={props.pageProfile.profiles}/>

        </div>
    );
};

PageProfile.propTypes = {
    profiles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            dataOfBirth: PropTypes.string.isRequired,
            education: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            webSite: PropTypes.string.isRequired,
            photoProfile: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            like: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    siteBarLeft: PropTypes.shape({
        listPages: PropTypes.array.isRequired,
    }).isRequired,
};

export default PageProfile;