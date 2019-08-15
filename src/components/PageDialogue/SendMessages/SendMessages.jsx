import React from 'react';
import '../../../App.css';
import css from './SendMessages.module.css';

const SendMessages = (props) => {

    let link = React.createRef();

    return (
        <div className={`${css.SendMessages} clearFix`}>
            <textarea ref={link}
                      onChange={() => props.dataFunctions.onChangeAddMessage(link.current.value)}
                      rows={2} className={css.inputMessages}
                      placeholder={'Enter Messages Text...'}
                      value={props.pageDialogue.newMessages}/>
            <button className={css.buttonSendMessages}
                    onClick={() => props.dataFunctions.onClickButtonAddMessages()}>
                Send
            </button>

        </div>
    );
};

export default SendMessages;