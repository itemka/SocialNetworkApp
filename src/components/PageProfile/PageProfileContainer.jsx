import React from 'react';
import {connect} from 'react-redux';
import PageProfile from './PageProfile';
import {withRouter} from "react-router-dom";
import {GetUserProfileThunkCreator, SetStatusProfilePageThunkCreator} from "../../Redux/ProfileReducer";
import {withAuthRedirectComponentHOC} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getAuthUserIdS} from "../../Redux/AuthSelectors";

class PageProfileContainer extends React.Component {

    refreshProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.GetUserProfileThunkCreator(userId);
        this.props.SetStatusProfilePageThunkCreator(userId);
    };

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.userId !== prevProps.match.params.userId) this.refreshProfile()
    }

    render() {
        return (<PageProfile/>)
    }
}

// let PageProfileContainerHOC = withAuthRedirectComponentHOC(PageProfileContainer);
// let WithUrlDataContainerComponent = withRouter(PageProfileContainerHOC);
// const ConnectedPageProfileContainer = connect(null, {GetUserProfileThunkCreator})(WithUrlDataContainerComponent);
// export default ConnectedPageProfileContainer;
const mapStateToProps = state => ({userId: getAuthUserIdS(state)});
export default compose(connect(mapStateToProps, {
        GetUserProfileThunkCreator,
        SetStatusProfilePageThunkCreator
    }), withRouter, withAuthRedirectComponentHOC
)(PageProfileContainer)