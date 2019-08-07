import React from 'react';
import css from './CoverWithProfileInfo.module.css';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import PropTypes from 'prop-types';

const CoverWithProfileInfo = (props) => {
    return (
        <div className={css.CoverWithProfileInfo}>
                <ProfileInfo
                    name={props.profiles[0].name}
                    dataOfBirth={props.profiles[0].dataOfBirth}
                    city={props.profiles[0].city}
                    education={props.profiles[0].education}
                    webSite={props.profiles[0].webSite}
                    photoProfile={props.profiles[0].photoProfile}
                />
        </div>
    );
};

CoverWithProfileInfo.propTypes = {
    name: PropTypes.string.isRequired,
    dataOfBirth: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    webSite: PropTypes.string.isRequired,
    photoProfile: PropTypes.string.isRequired,
};

export default CoverWithProfileInfo;