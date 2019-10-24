import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import manWithBeard from './../../../Files/Images/manBeard.png';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        isMode: false,
        statusText: this.props.status
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({statusText: this.props.status})
        }
    }

    changeStatus = (e) => {
        this.setState({statusText: e.currentTarget.value});
    };
    
    activateEditMode = () => this.setState({isMode: true});
    deactivateEditMode = () => {
        this.setState({isMode: false});
        this.props.UpdateStatusProfilePageThunkCreator(this.state.statusText);
    };

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
                                        <div></div>
                                        <div>Web Site: <a href={this.props.webSite}>Посетить</a></div>
                                    </div>
                                </div>
                                <div className={css.status}>Status: {this.state.isMode
                                    ? <input type="text"
                                             autoFocus={true}
                                             onChange={(e) => this.changeStatus(e)}
                                             onBlur={this.deactivateEditMode}
                                             value={this.state.statusText}/>
                                    : <span
                                        onClick={this.activateEditMode}>{`${this.props.status ? this.props.status : ' _empty_'}`}</span>}
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        );
    }
}

export default ProfileInfo;