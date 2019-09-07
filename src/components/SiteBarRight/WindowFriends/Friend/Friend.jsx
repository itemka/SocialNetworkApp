import React from 'react';
import '../../../../App.css';
import css from './Friend.module.css';
import PropTypes from 'prop-types';

const Friend = (props) => {
    let profiles = props.profiles.map(item =>

        <div key={item.id} className={css.Friend}>
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