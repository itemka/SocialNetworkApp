import React from 'react';
import '../../../../App.css';
import css from './Message.module.css';
import PropTypes from 'prop-types';

const Message = (props) => {
    return (
        <div className={`${css.Message} clearFix`}>

            <div> <img src={props.photoProfile} alt=""/> </div>
            <div className={css.dataMessage}>

                <div className={css.nameMenMessage}> {`${props.nameProfile} (idProf=${props.idProfile})`} </div>
                <div className={css.textMessage}> {`${props.message} (idMess=${props.id})`} </div>

            </div>

        </div>
    );
};

Message.propTypes = {
    photoProfile: PropTypes.string.isRequired,
    nameProfile: PropTypes.string.isRequired,
    idProfile: PropTypes.number.isRequired,

    message: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default Message;