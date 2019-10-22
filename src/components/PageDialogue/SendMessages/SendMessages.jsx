import React from 'react';
import '../../../App.css';
import css from './SendMessages.module.css';
import {Field, reduxForm} from "redux-form";

const AddMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={`${css.SendMessages} clearFix`}>
            <Field component={"textarea"}
                   className={`${css.inputMessages}`}
                   name={"newMessage"}
                   rows={2}
                   placeholder={'Enter Messages Text...'}/>
            <button className={css.buttonSendMessages}>Send</button>
        </form>
    )
};

const AddMessageReducerForm = reduxForm({form: `AddMessageDialogue`})(AddMessageForm);

const SendMessages = (props) => {
    const addNewMessage = values => {
        console.log(values.newMessage);
        props.onClickAddMessageActionCreator(values.newMessage);
    };
    return <AddMessageReducerForm onSubmit={addNewMessage}/>
};

export default SendMessages;