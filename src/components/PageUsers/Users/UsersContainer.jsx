import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {
    GetUserThunkCreator, SetCurrentPageMethodThunkCreator,
    SetFollowThunkCreator, SetUnFollowThunkCreator,
} from "../../../Redux/UsersReducer";

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.GetUserThunkCreator(this.props.currentPage, this.props.pageSize, this.props.status)
        // this.props.setStatus(statuses.INPROGRESS);
        // this.props.setFetching(true);
        // api.getUsersAPI(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.setStatus(statuses.SUCCESS);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        //     this.props.setFetching(false);
        // })
    }

    setCurrentPageMethod = currentPage => {
        this.props.SetCurrentPageMethodThunkCreator(currentPage, this.props.pageSize)
        // this.props.setFetching(true);
        // this.props.setCurrentPage(currentPage);
        // api.getUsersAPI(currentPage, this.props.pageSize).then(data => {
        //     this.props.setStatus(statuses.SUCCESS);
        //     this.props.setUsers(data.items);
        //     this.props.setFetching(false);
        // })
    };

    setFollow = userId => {
        this.props.SetFollowThunkCreator(userId);
        // this.props.setCheckFollow(true, userId);
        // api.setFollowAPI(userId).then(data => {
        //     if (data.resultCode === 0) {// if we have login (resultCode === 0) then we can make request to setFollow
        //         this.props.setFollow(userId);
        //         this.props.setCheckFollow(false, userId);
        //     }
        // })
    };

    setUnFollow = userId => {
        this.props.SetUnFollowThunkCreator(userId);
        // this.props.setCheckFollow(true, userId);
        // api.setUnFollowAPI(userId).then(data => {
        //     if (data.resultCode === 0) { // if we have login (resultCode === 0) then we can make request to setFollow
        //         this.props.setUnFollow(userId);
        //         this.props.setCheckFollow(false, userId);
        //     }
        // })
    };

    render() {
        return <div>
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
        checkFollow: state.pageUsers.checkFollow
    }
};

export default connect(mapStateToProps, {
    GetUserThunkCreator, SetCurrentPageMethodThunkCreator, SetFollowThunkCreator, SetUnFollowThunkCreator,}
)(UsersAPIContainer);