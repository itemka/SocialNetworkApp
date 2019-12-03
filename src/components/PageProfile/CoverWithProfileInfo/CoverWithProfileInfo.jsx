import React from 'react';
import css from './CoverWithProfileInfo.module.css';
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";

const CoverWithProfileInfo = () => {
    return (
        <div className={css.CoverWithProfileInfo}>
            <ProfileInfoContainer/>
        </div>
    );
};

export default CoverWithProfileInfo;