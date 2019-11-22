import React from 'react';
import {connect} from "react-redux";
import {
    GetUserThunkCreator, SetCurrentPageMethodThunkCreator,
} from "../../../Redux/UsersReducer";
import {withAuthRedirectComponentHOC} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getUsersCurrentPageS, getUsersIsFetchingS, getUsersPageSizeS, getUsersS, getUsersTotalUsersCountS, geUsersStatusS
} from "../../../Redux/UsersSelectors";
import {Users} from "./Users";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.GetUserThunkCreator(this.props.currentPage, this.props.pageSize, this.props.status)
    }

    setCurrentPageMethod = currentPage => this.props.SetCurrentPageMethodThunkCreator(currentPage, this.props.pageSize);

    render() {
        return (
            <>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       setCurrentPageMethod={this.setCurrentPageMethod}
                       currentPage={this.props.currentPage}
                       checkFollow={this.props.checkFollow}
                       isFetching={this.props.isFetching}
                />
            </>
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
    }
};

// export default connect(
//     mapStateToProps,
//     {GetUserThunkCreator, SetCurrentPageMethodThunkCreator, SetFollowThunkCreator, SetUnFollowThunkCreator}
// )(withAuthRedirectComponentHOC(UsersAPIContainer);

export default compose(
    connect(mapStateToProps, {GetUserThunkCreator, SetCurrentPageMethodThunkCreator}),
    withAuthRedirectComponentHOC
)(UsersAPIContainer);