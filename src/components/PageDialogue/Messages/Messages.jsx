import React from 'react';
import css from './Messages.module.css';
import Message from "./Message/Message";
// import {Route} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Messages = (props) => {

    let messages = props.messages.map(
        item => <Message message={item.message} id={item.id}
                                    idProfile={props.profiles[0].id}
                                    nameProfile={props.profiles[0].name}
                                    photoProfile={props.profiles[0].photoProfile}/>
    );

    return (
        <div className={css.Messages}>
                {messages}
        </div>
    );
};

Messages.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,

    profiles: PropTypes.arrayOf({
        idProfile: PropTypes.number.isRequired,
        nameProfile: PropTypes.string.isRequired,
        photoProfile: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = state => {
    return {
        messages: state.pageDialogue.messages,
        profiles: state.pageProfile.profiles,
    }
};
const mapDispatchToProps = () => {
    return {}
};
const ConnectedMessages = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default ConnectedMessages;