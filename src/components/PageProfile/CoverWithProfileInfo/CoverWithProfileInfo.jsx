import React from 'react';
import css from './CoverWithProfileInfo.module.css';
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const CoverWithProfileInfo = () => {
    return (
        <div className={css.CoverWithProfileInfo}>
                <ProfileInfo />
        </div>
    );
};

export default CoverWithProfileInfo;