import React from 'react';
import '../../../App.css';
import css from './SendMessages.module.css';

const SendMessages = (props) => {

    let refSendMessage = React.createRef();

    let onKeyPress = e => {
        if (e.key === "Enter") {
            if (props.pageDialogue.newMessages !== '')
                props.dataFunctions.onClickButtonAddMessages();
        }
    };

    return (
        <div className={`${css.SendMessages} clearFix`}>
            <textarea ref={refSendMessage}
                      onChange={() => props.dataFunctions.onChangeAddMessage(refSendMessage.current.value)}
                      rows={2} className={css.inputMessages}
                      placeholder={'Enter Messages Text...'} value={props.pageDialogue.newMessages}
                      onKeyPress={onKeyPress}/>
            <button className={css.buttonSendMessages}
                    onClick={() => props.dataFunctions.onClickButtonAddMessages()}>
                Send
            </button>

        </div>
    );
};

export default SendMessages;