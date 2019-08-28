import React from 'react';
import css from './CoverWithProfileInfo.module.css';
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import PropTypes from 'prop-types';

const CoverWithProfileInfo = () => {
    return (
        <div className={css.CoverWithProfileInfo}>
                <ProfileInfo />
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