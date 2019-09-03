import React from 'react';
import css from './PageDialogue.module.css';
// import {Route} from "react-router-dom";
import SiteBarLeftContainer from "../SiteBarLeft/SiteBarLeftContainer";
import DialoguesContainer from "./Dialogues/DialoguesContainer";
import MessagesContainer from "./Messages/MessagesContainer";
import SendMessagesContainer from "./SendMessages/SendMessagesContainer";

const PageDialogue = () => {
    return (
        <div className={css.PageDialogue}>

            <SiteBarLeftContainer/>

            <div className={css.Chat}>
                <div className={css.titleChat}>Chat</div>
                <div className={css.DialoguesWithMessages}>

                    <DialoguesContainer/> <MessagesContainer/>
                                          <SendMessagesContainer/>

                </div>
            </div>
        </div>
    );
};

export default PageDialogue;