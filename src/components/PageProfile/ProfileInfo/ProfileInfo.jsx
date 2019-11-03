import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import manWithBeard from './../../../Files/Images/manBeard.png';
//import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooc";

class ProfileInfo extends React.Component {
    render() {
        return (
            <div>
                <div className={css.ProfileInfo}>
                    {!this.props.profile
                        ? <Preloader/>
                        : <>
                            <div>
                                <img
                                    src={this.props.profile.photos.large !== null ? this.props.profile.photos.large : manWithBeard}/>
                            </div>
                            <div className={css.listProfileInfo}>
                                <div className={css.nameProfile}>{this.props.profile.fullName}</div>
                                <div>
                                    <div>{`userId: ${this.props.profile.userId}`}</div>
                                    <div>{`aboutMe: ${this.props.profile.aboutMe}`}</div>
                                    <div>{`lookingForAJob: ${this.props.profile.lookingForAJob}`}</div>
                                    <div>{`lookingForAJobDescription: ${this.props.profile.lookingForAJobDescription}`}</div>
                                    <div>
                                        <div>{`facebook: ${this.props.profile.contacts.facebook}`}</div>
                                        <div>{`website: ${this.props.profile.contacts.website}`}</div>
                                        <div>{`vk: ${this.props.profile.contacts.vk}`}</div>
                                        <div>{`instagram: ${this.props.profile.contacts.instagram}`}</div>
                                        <div>{`github: ${this.props.profile.contacts.github}`}</div>
                                        <div>{`mainLink: ${this.props.profile.contacts.mainLink}`}</div>
                                        <div>Web Site: <a href={this.props.webSite}>Посетить</a></div>
                                    </div>
                                </div>
                                <ProfileStatusWithHooks {...this.props}/>
                            </div>
                        </>
                    }
                </div>
            </div>
        );
    }
}

export default ProfileInfo;