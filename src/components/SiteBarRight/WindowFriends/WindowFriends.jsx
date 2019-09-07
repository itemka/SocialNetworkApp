import React from 'react';
import css from './WindowFriends.module.css';
import FriendContainer from "./Friend/FriendContainer";

const WindowFriends = (props) => {
    return (
        <div className={css.WindowFriends}>
            <div className={css.titleFriends}>{`Друзья ${props.profiles.length}`}</div>
            <div className={css.Friends}>
                <FriendContainer/>
            </div>
            <div className={css.titleFriendsOnline}>{`Друзья online ${props.profiles.length}`}</div>
            <div className={css.Friends}>
                <FriendContainer/>
            </div>
        </div>
    );
};

export default WindowFriends;