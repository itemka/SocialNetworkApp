import React from 'react';
import css from './Dialogue.module.css';
import '../../../../App.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

const Dialogue = (props) => {
    return (
        <div>
            <NavLink to={`/messages/${props.idProfile}`}>
                <div className={`${css.oneDialogue} clearFix`}>
                    <div><img src={props.photoProfile} alt=""/></div>
                    <div className={css.nameFriends}>{`(idProf=${props.idProfile}) ${props.nameProfile}`}</div>
                </div>
            </NavLink>
        </div>
    );
};

Dialogue.propTypes = {
    idProfile: PropTypes.number.isRequired,
    photoProfile: PropTypes.string.isRequired,
    nameProfile: PropTypes.string.isRequired,
};

export default Dialogue;