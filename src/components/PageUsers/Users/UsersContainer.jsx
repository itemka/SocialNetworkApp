import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {
    GetUserThunkCreator, SetCurrentPageMethodThunkCreator,
    SetFollowThunkCreator, SetUnFollowThunkCreator,
} from "../../../Redux/UsersReducer";
import {withAuthRedirectComponentHOC} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsersCheckFollowS,
    getUsersCurrentPageS, getUsersIsFetchingS,
    getUsersPageSizeS,
    getUsersS,
    getUsersTotalUsersCountS,
    geUsersStatusS
} from "../../../Redux/UsersSelectors";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.GetUserThunkCreator(this.props.currentPage, this.props.pageSize, this.props.status)
    }

    setCurrentPageMethod = currentPage => this.props.SetCurrentPageMethodThunkCreator(currentPage, this.props.pageSize);
    setFollow = userId => this.props.SetFollowThunkCreator(userId);
    setUnFollow = userId => this.props.SetUnFollowThunkCreator(userId);

    render() {
        return (
            <div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       setUnFollow={this.setUnFollow}
                       setFollow={this.setFollow}
                       setCurrentPageMethod={this.setCurrentPageMethod}
                       currentPage={this.props.currentPage}
                       checkFollow={this.props.checkFollow}
                       isFetching={this.props.isFetching}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: getUsersS(state),
        status: geUsersStatusS(state),
        pageSize: getUsersPageSizeS(state),
        totalUsersCount: getUsersTotalUsersCountS(state),
        currentPage: getUsersCurrentPageS(state),
        isFetching: getUsersIsFetchingS(state),
        checkFollow: getUsersCheckFollowS(state),
    }
};

// export default connect(
//     mapStateToProps,
//     {GetUserThunkCreator, SetCurrentPageMethodThunkCreator, SetFollowThunkCreator, SetUnFollowThunkCreator}
// )(withAuthRedirectComponentHOC(UsersAPIContainer);

export default compose(
    connect(
        mapStateToProps,
        {
            GetUserThunkCreator,
            SetCurrentPageMethodThunkCreator,
            SetFollowThunkCreator,
            SetUnFollowThunkCreator
        }),
    withAuthRedirectComponentHOC
)(UsersAPIContainer);