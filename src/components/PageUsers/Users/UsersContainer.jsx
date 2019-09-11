import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import axios from "axios";
import {
    setCurrentPageActionCreator,
    setFollowActionCreator,
    setStatusActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator, statuses,
    unFollowActionCreator
} from "../../../Redux/PageUsersReducer";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.INPROGRESS);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setStatus(statuses.SUCCESS);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                })
        }
    }

    setCurrentPageMethod = currentPage => {
        this.props.setCurrentPage(currentPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setStatus(statuses.SUCCESS);
                this.props.setUsers(response.data.items);
            })
    };

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      users={this.props.users}
                      unFollow={this.props.unFollow}
                      setFollow={this.props.setFollow}
                      setCurrentPageMethod={this.setCurrentPageMethod}
                      currentPage={this.props.currentPage}/>
    }
}


const mapStateToProps = state => {
    return {
        users: state.pageUsers.users,
        status: state.pageUsers.status,
        pageSize: state.pageUsers.pageSize,
        totalUsersCount: state.pageUsers.totalUsersCount,
        currentPage: state.pageUsers.currentPage
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setUsers: users => dispatch(setUsersActionCreator(users)),
        setStatus: status => dispatch(setStatusActionCreator(status)),
        setFollow: userId => dispatch(setFollowActionCreator(userId)),
        unFollow: userId => dispatch(unFollowActionCreator(userId)),
        setCurrentPage: currentPage => dispatch(setCurrentPageActionCreator(currentPage)),
        setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCountActionCreator(totalUsersCount))
    }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);
export default UsersContainer;