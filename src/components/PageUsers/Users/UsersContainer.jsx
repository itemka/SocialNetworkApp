import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import axios from "axios";
import Preloader from "../../Common/Preloader/Preloader";
import {
    setCurrentPage, setFetching,
    setFollow,
    setStatus,
    setTotalUsersCount,
    setUnFollow,
    setUsers, statuses
} from "../../../Redux/UsersReducer";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.INPROGRESS);
            this.props.setFetching(true);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                    {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}})
                .then(response => {
                    this.props.setStatus(statuses.SUCCESS);
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                    this.props.setFetching(false);
                })
        }
    }

    setCurrentPageMethod = currentPage => {
        this.props.setFetching(true);
        this.props.setCurrentPage(currentPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`,
                {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}})
            .then(response => {
                this.props.setStatus(statuses.SUCCESS);
                this.props.setUsers(response.data.items);
                this.props.setFetching(false);
            })
    };

    setFollow = userId => {
        axios.post(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {},
            {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}})
            .then(response => {
                // if we have login (resultCode === 0) then we can make request to setFollow
                if (response.data.resultCode === 0) {
                    this.props.setFollow(userId);
                }
            })
    };

    setUnFollow = userId => {
        axios.delete(
            `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
            {withCredentials: true, headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"}})
            .then(response => {
                // if we have login (resultCode === 0) then we can make request to setFollow
                if (response.data.resultCode === 0) {
                    this.props.setUnFollow(userId);
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
                   currentPage={this.props.currentPage}/>
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
        isFetching: state.pageUsers.isFetching
    }
};

const UsersContainer = connect(
    mapStateToProps,
    {setUsers, setStatus, setFollow, setUnFollow, setCurrentPage, setTotalUsersCount, setFetching}
)(UsersAPIContainer);
export default UsersContainer;