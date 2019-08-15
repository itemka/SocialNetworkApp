import React from 'react';
import css from './PageDialogue.module.css';
import SiteBarLeft from "../SiteBarLeft/SiteBarLeft";
import Dialogues from "./Dialogues/Dialogues";
import Messages from "./Messages/Messages";
// import {Route} from "react-router-dom";
import PropTypes from 'prop-types';
import SendMessages from "./SendMessages/SendMessages";

const PageDialogue = (props) => {
    return (
        <div className={css.PageDialogue}>

            <SiteBarLeft siteBarLeft={props.siteBar.siteBarLeft}/>

            <div className={css.Chat}>
                <div className={css.titleChat}>Chat</div>
                <div className={css.DialoguesWithMessages}>

                    <Dialogues profiles={props.pageProfile.profiles}/>
                    <Messages  messages={props.pageDialogue.messages}
                              profiles={props.pageProfile.profiles}/>
                    <SendMessages pageDialogue={props.pageDialogue} dataFunctions={props.dataFunctions}/>

                </div>
            </div>
        </div>
    );
};

PageDialogue.propTypes = {
    siteBar: PropTypes.object.isRequired,
    siteBarLeft: PropTypes.object.isRequired,

    profiles: PropTypes.arrayOf().isRequired,

    pageDialogue: PropTypes.object.isRequired,
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default PageDialogue;