import React from 'react';
import '../../../App.css';
import css from './SendMessages.module.css';

const SendMessages = (props) => {
    let state = {
        error: false,
        textNewMessage: props.newMessage,
    };
    return (
        <div className={`${css.SendMessages} clearFix`}>
            <textarea onChange={event => props.onChangeAddPost(event.currentTarget.value)}
                      rows={2}
                      className={`${css.inputMessages}`}
                      placeholder={'Enter Messages Text...'}
                      value={state.textNewMessage}/>
            <button className={css.buttonSendMessages}
                    onClick={() => props.onClickAddMessage()}>
                Send
            </button>

        </div>
    );
};

export default SendMessages;