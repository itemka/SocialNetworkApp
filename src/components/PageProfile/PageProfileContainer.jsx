import React from 'react';
import {connect} from 'react-redux';
import PageProfile from './PageProfile';
import {withRouter} from "react-router-dom";
import {GetUserProfileThunkCreator} from "../../Redux/ProfileReducer";

class PageProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 1579;
        this.props.GetUserProfileThunkCreator(userId);
    }

    render() {
        return (<PageProfile/>)
    }
}

let WithUrlDataContainerComponent = withRouter(PageProfileContainer);
const ConnectedPageProfileContainer = connect(null, {GetUserProfileThunkCreator})(WithUrlDataContainerComponent);
export default ConnectedPageProfileContainer;