import React from 'react';
import PageDialogue from "./PageDialogue";
import {compose} from "redux";
import {withAuthRedirectComponentHOC} from "../../hoc/withAuthRedirect";

class PageDialogueContainer extends React.Component {
    render() {
        return (<PageDialogue/>)
    }
}

export default compose(withAuthRedirectComponentHOC)(PageDialogueContainer);