import React from 'react';
import css from './WindowFriends.module.css';
import Friends from "./Friends/Friends";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const WindowFriends = (props) => {
    return (
        <div className={css.WindowFriends}>
            <div className={css.titleFriends}>{`Друзья ${props.profiles.length}`}</div>
            <div className={css.Friends}>
                <Friends />
            </div>
            <div className={css.titleFriendsOnline}>{`Друзья online ${props.profiles.length}`}</div>
            <div className={css.Friends}>
                <Friends />
            </div>
        </div>
    );
};

WindowFriends.propTypes = {
    length: PropTypes.number.isRequired,
    profiles: PropTypes.arrayOf().isRequired,
};

const mapStateToProps = state => {
    return {
        profiles: state.pageProfile.profiles,
    }
};
const mapDispatchToProps = () => { return {} };

const ConnectedWindowFriends = connect(mapStateToProps, mapDispatchToProps)(WindowFriends);

export default ConnectedWindowFriends;