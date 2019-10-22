import React from 'react';
import '../../../../App.css';
import css from './Friend.module.css';
import PropTypes from 'prop-types';
import manWithBeard from "../../../../Files/Images/manBeard.png";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    let usersPhotos = props.users.map(user =>
        <div key={user.id} className={css.Friend}>
            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small ? user.photos.small : manWithBeard} alt=""/>
            </NavLink>
            <div className={css.friendName}>{user.name}</div>
        </div>
    );
    return (<div className={`clearFix`}> {usersPhotos} </div>);
};

Friend.propTypes = {
    // photoProfile: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,`
    profiles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            photoProfile: PropTypes.string,
            name: PropTypes
        }),
    ).isRequired,
    // ).isRequired,
};

export default Friend;