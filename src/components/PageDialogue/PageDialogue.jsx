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

                    <div className={css.DialoguesContainer}>
                        <DialoguesContainer/>
                    </div>
                    <div className={css.MessagesContainer}>
                        <MessagesContainer/>
                        <SendMessagesContainer/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PageDialogue;