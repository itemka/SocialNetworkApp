import React from 'react';
import '../../../../../App.css';
import css from './Friend.module.css';
import PropTypes from 'prop-types';

const Friend = (props) => {
    return (
        <div className={css.Friend}>

                <div><img src={props.photoProfile} alt=""/></div>
                <div className={css.friendName}>{props.name}</div>

        </div>
    );
};

Friend.propTypes = {
    photoProfile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Friend;