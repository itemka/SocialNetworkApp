import React from 'react';
import '../../../../../App.css';
import css from './Friend.module.css';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Friend = (props) => {
    let profiles = props.profiles.map(item =>

        <div className={css.Friend}>
            <div><img src={item.photoProfile} alt=""/></div>
            <div className={css.friendName}>{item.name}</div>
        </div>
    );
    return (
        <div className={`clearFix`}>
            {profiles}
        </div>
    );
};

Friend.propTypes = {
    photoProfile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
    return {
        profiles: state.pageProfile.profiles,
    }
};
const mapDispatchToProps = () => {
    return {}
};
const ConnectedFriend = connect(mapStateToProps, mapDispatchToProps)(Friend);

export default ConnectedFriend;