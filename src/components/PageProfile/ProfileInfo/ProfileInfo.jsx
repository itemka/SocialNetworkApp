import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    return (
        <div className={css.ProfileInfo}>
            {!props.profile ? <Preloader/> : <>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                <div className={css.listProfileInfo}>
                    <div className={css.nameProfile}>{props.profile.fullName}</div>
                    <div>
                        <div>{`userId: ${props.profile.userId}`}</div>
                        <div>{`aboutMe: ${props.profile.aboutMe}`}</div>
                        <div>{`lookingForAJob: ${props.profile.lookingForAJob}`}</div>
                        <div>{`lookingForAJobDescription: ${props.profile.lookingForAJobDescription}`}</div>
                        <div>
                            <div>{`facebook: ${props.profile.contacts.facebook}`}</div>
                            <div>{`website: ${props.profile.contacts.website}`}</div>
                            <div>{`vk: ${props.profile.contacts.vk}`}</div>
                            <div>{`instagram: ${props.profile.contacts.instagram}`}</div>
                            <div>{`github: ${props.profile.contacts.github}`}</div>
                            <div>{`mainLink: ${props.profile.contacts.mainLink}`}</div>
                            <div>
                            </div>
                            <div>Web Site: <a href={props.webSite}>Посетить</a></div>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    );
};

export default ProfileInfo;