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
                {this.props.isFetching === true ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       users={this.props.users}
                       setUnFollow={this.setUnFollow}
                       setFollow={this.setFollow}
                       setCurrentPageMethod={this.setCurrentPageMethod}
                       currentPage={this.props.currentPage}
                       checkFollow={this.props.checkFollow}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.pageUsers.users,
        status: state.pageUsers.status,
        pageSize: state.pageUsers.pageSize,
        totalUsersCount: state.pageUsers.totalUsersCount,
        currentPage: state.pageUsers.currentPage,
        isFetching: state.pageUsers.isFetching,
        checkFollow: state.pageUsers.checkFollow,
    }
};

export default connect(
    mapStateToProps,
    {GetUserThunkCreator, SetCurrentPageMethodThunkCreator, SetFollowThunkCreator, SetUnFollowThunkCreator}
)(withAuthRedirectComponentHOC(UsersAPIContainer));