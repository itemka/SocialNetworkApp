import React from 'react';
import css from './WindowFriends.module.css';
import Friends from "./Friends/Friends";

const WindowFriends = (props) => {
    return (
        <div className={css.WindowFriends}>
            <div className={css.titleFriends}>{`Друзья ${props.profiles.length}`}</div>
            <div className={css.Friends}>
                <Friends/>
            </div>
            <div className={css.titleFriendsOnline}>{`Друзья online ${props.profiles.length}`}</div>
            <div className={css.Friends}>
                <Friends/>
            </div>
        </div>
    );
};

export default WindowFriends;