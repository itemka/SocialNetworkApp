import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../Common/Preloader/Preloader";
import {
    setCheckFollow,
    setCurrentPage, setFetching,
    setFollow,
    setStatus,
    setTotalUsersCount,
    setUnFollow,
    setUsers, statuses
} from "../../../Redux/UsersReducer";
import {getUsersAPI, setFollowAPI, setUnFollowAPI} from "../../../API/API";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.INPROGRESS);
            this.props.setFetching(true);
            getUsersAPI(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setStatus(statuses.SUCCESS);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.setFetching(false);
            })
        }
    }

    setCurrentPageMethod = currentPage => {
        this.props.setFetching(true);
        this.props.setCurrentPage(currentPage);
        getUsersAPI(currentPage, this.props.pageSize).then(data => {
            this.props.setStatus(statuses.SUCCESS);
            this.props.setUsers(data.items);
            this.props.setFetching(false);
        })
    };

    setFollow = userId => {
        this.props.setCheckFollow(true, userId);
        setFollowAPI(userId).then(data => {
            if (data.resultCode === 0) {// if we have login (resultCode === 0) then we can make request to setFollow
                this.props.setFollow(userId);
                this.props.setCheckFollow(false, userId);
            }
        })
    };

    setUnFollow = userId => {
        this.props.setCheckFollow(true, userId);
        setUnFollowAPI(userId).then(data => {
            if (data.resultCode === 0) { // if we have login (resultCode === 0) then we can make request to setFollow
                this.props.setUnFollow(userId);
                this.props.setCheckFollow(false, userId);
            }
        })
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

const UsersContainer = connect(
    mapStateToProps,
    {setUsers, setStatus, setFollow, setUnFollow, setCurrentPage, setTotalUsersCount, setFetching, setCheckFollow}
)(UsersAPIContainer);
export default UsersContainer;