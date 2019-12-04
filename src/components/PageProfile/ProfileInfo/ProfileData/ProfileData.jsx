import React from 'react';
import css from './ProfileData.module.css';
import manWithBeard from './../../../../Files/Images/manBeard.png';
import {Contact} from "./../Contact/Contact";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooc";
import style3 from "../../../Login/Login.module.css";

export const ProfileData = props => {
    return (
        <>
            <div>
                <img className={css.profileImg}
                     src={props.profile.photos.large !== null ? props.profile.photos.large : manWithBeard}/>
                <div>
                    {props.isOwner === props.otherPeopleId ? <input type="file" onChange={props.selectedPhoto}/> : null}
                </div>
            </div>
            <div className={css.listProfileInfo}>
                {props.error && <div className={style3.formError}>{props.error}</div>}
                <div className={css.nameProfile}>{props.profile.fullName}</div>
                <div>
                    <div><b>My id:</b> {props.profile.userId}</div>
                    <div><b>Looking for a job:</b> {props.profile.lookingForAJob ? `Yes` : `No`}</div>
                    <div><b>My professional skills:</b> {props.profile.lookingForAJobDescription}</div>
                    <div><b>About me:</b> {props.profile.aboutMe}</div>
                    <div>
                        <b>Contacts:</b>
                        {Object.keys(props.profile.contacts).map(key => <Contact key={key}
                                                                                 contactTitle={key}
                                                                                 contactValue={props.profile.contacts[key]}/>)}
                    </div>
                </div>
                <ProfileStatusWithHooks {...props}/>
            </div>
        </>
    )
};