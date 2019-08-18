import React from 'react';
import '../../../App.css';
import css from './SendMessages.module.css';

const SendMessages = (props) => {

    let link = React.createRef();

    let state = {
        error: false,
        textNewMessage: props.pageDialogue.newMessages,
    };

    let onChangeAddPost = () => {
        props.dispatch({
            type: 'CHANGE-MESSAGE',
            newMessages: link.current.value,
        });
    };
    let onClickAddMessage = () => {
        props.dispatch({
            type: 'ADD-MESSAGE',
        });
    };

    return (
        <div className={`${css.SendMessages} clearFix`}>
            <textarea ref={link}
                      onChange={() => onChangeAddPost()}
                      rows={2}
                      className={`${css.inputMessages}`}
                      placeholder={'Enter Messages Text...'}
                      value={state.textNewMessage}/>
            <button className={css.buttonSendMessages}
                    onClick={() => onClickAddMessage()}>
                Send
            </button>

        </div>
    );
};

export default SendMessages;