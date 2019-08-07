import React from 'react';
import css from './Friends.module.css';
import Friend from "./Friend/Friend";
import '../../../../App.css';
import PropTypes from 'prop-types';

const Friends = (props) => {
    let profiles = props.profiles.map(item => <Friend photoProfile={item.photoProfile} name={item.name}/>);
    return (
        <div className={`clearFix`}>
            {profiles}
        </div>
    );
};

Friend.propTypes = {
    profiles: PropTypes.arrayOf().isRequired,

    photoProfile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Friends;