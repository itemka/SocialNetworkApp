import React from 'react';
import {connect} from 'react-redux';
import PageProfile from './PageProfile';
import {withRouter} from "react-router-dom";
import {GetUserProfileThunkCreator, SetStatusProfilePageThunkCreator} from "../../Redux/ProfileReducer";
import {withAuthRedirectComponentHOC} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class PageProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 1579;
        this.props.GetUserProfileThunkCreator(userId);
        this.props.SetStatusProfilePageThunkCreator(userId);
    }

    render() {
        return (<PageProfile/>)
    }
}

// let PageProfileContainerHOC = withAuthRedirectComponentHOC(PageProfileContainer);
// let WithUrlDataContainerComponent = withRouter(PageProfileContainerHOC);
// const ConnectedPageProfileContainer = connect(null, {GetUserProfileThunkCreator})(WithUrlDataContainerComponent);
// export default ConnectedPageProfileContainer;

export default compose(connect(null, {GetUserProfileThunkCreator, SetStatusProfilePageThunkCreator}), withRouter, withAuthRedirectComponentHOC
)(PageProfileContainer)