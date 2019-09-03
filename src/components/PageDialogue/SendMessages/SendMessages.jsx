import React from 'react';
import '../../../App.css';
import css from './SendMessages.module.css';

const SendMessages = (props) => {
    let link = React.createRef();
    let state = {
        error: false,
        textNewMessage: props.newMessage,
    };
    return (
        <div className={`${css.SendMessages} clearFix`}>
            <textarea ref={link}
                      onChange={() => props.onChangeAddPost(link.current.value)}
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