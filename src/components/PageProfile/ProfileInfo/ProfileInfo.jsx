import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormReduxForm} from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {
    return (
        <div className={`${css.box} ${css.ProfileInfo}`}>
            {!props.profile ? <Preloader/>
                : props.editMode ? <ProfileDataFormReduxForm {...props} initialValues={props.profile}/> :
                    <ProfileData {...props}/>
            }
        </div>
    )
};

export default ProfileInfo;