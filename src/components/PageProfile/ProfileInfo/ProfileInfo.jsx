import React from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={css.ProfileInfo}>

            <div>
                <img src={props.photoProfile}/>
            </div>
            <div className={css.listProfileInfo}>
                <div className={css.nameProfile}>{props.name}</div>
                <div>
                    <div>{`Data of Birth: ${props.dataOfBirth}`}</div>
                    <div>{`City: ${props.city}`}</div>
                    <div>{`Education: ${props.education}`}</div>
                    <div>
                        <div>Web Site: <a href={props.webSite}>Посетить</a></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileInfo;