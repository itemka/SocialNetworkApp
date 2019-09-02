import React from 'react';
import css from './PageDialogue.module.css';
import SiteBarLeft from "../SiteBarLeft/SiteBarLeft";
import Dialogues from "./Dialogues/Dialogues";
import Messages from "./Messages/Messages";
// import {Route} from "react-router-dom";
import SendMessages from "./SendMessages/SendMessages";

const PageDialogue = () => {
    return (
        <div className={css.PageDialogue}>

            <SiteBarLeft />

            <div className={css.Chat}>
                <div className={css.titleChat}>Chat</div>
                <div className={css.DialoguesWithMessages}>

                    <Dialogues />   <Messages />
                                    <SendMessages />

                </div>
            </div>
        </div>
    );
};

export default PageDialogue;