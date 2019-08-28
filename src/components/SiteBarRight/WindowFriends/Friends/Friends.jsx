import React from 'react';
import Friend from "./Friend/Friend";
import PropTypes from 'prop-types';

const Friends = () => {
    return (
        <Friend/>
    );
};

Friend.propTypes = {
    profiles: PropTypes.arrayOf().isRequired,

    photoProfile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Friends;