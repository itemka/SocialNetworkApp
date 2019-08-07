import React from 'react';
import css from './WindowFriends.module.css';
import Friends from "./Friends/Friends";
import PropTypes from 'prop-types';

const WindowFriends = (props) => {
    return (
        <div className={css.WindowFriends}>
            <div className={css.titleFriends}>{`Друзья ${props.profiles.length}`}</div>
            <div className={css.Friends}>
                <Friends profiles={props.profiles} />
            </div>
            <div className={css.titleFriendsOnline}>{`Друзья online ${props.profiles.length}`}</div>
            <div className={css.Friends}>
                <Friends profiles={props.profiles} />
            </div>
        </div>
    );
};

WindowFriends.propTypes = {
    length: PropTypes.number.isRequired,
    profiles: PropTypes.arrayOf().isRequired,
};

export default WindowFriends;