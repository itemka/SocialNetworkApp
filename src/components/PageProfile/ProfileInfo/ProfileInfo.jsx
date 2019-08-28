import React from 'react';
import css from './ProfileInfo.module.css';
import {connect} from "react-redux";

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

const mapStateToProps = state => {
    return {
        photoProfile: state.pageProfile.profiles[0].photoProfile,
        name: state.pageProfile.profiles[0].name,
        dataOfBirth: state.pageProfile.profiles[0].dataOfBirth,
        city: state.pageProfile.profiles[0].city,
        education: state.pageProfile.profiles[0].education,
        webSite: state.pageProfile.profiles[0].webSite,
    }
};
const mapDispatchToProps = () => {
    return {}
};

const ConnectedProfileInfo = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ConnectedProfileInfo;