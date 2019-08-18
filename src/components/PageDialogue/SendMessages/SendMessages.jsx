import React from 'react';
import '../../../App.css';
import css from './SendMessages.module.css';

const SendMessages = (props) => {

    let link = React.createRef();

    let state = {
        error: false,
        textNewMessage: props.pageDialogue.newMessages,
    };

    let onChangeTextarea = () => {
        props.onChangeMessage(link.current.value);
    };
    let onClickAddMess = () => {
        props.onClickAddMessage();
    };

    return (
        <div className={`${css.SendMessages} clearFix`}>
            <textarea ref={link}
                      onChange={() => onChangeTextarea()}
                      rows={2}
                      className={`${css.inputMessages}`}
                      placeholder={'Enter Messages Text...'}
                      value={state.textNewMessage}/>
            <button className={css.buttonSendMessages}
                    onClick={() => onClickAddMess()}>
                Send
            </button>

        </div>
    );
};

export default SendMessages;