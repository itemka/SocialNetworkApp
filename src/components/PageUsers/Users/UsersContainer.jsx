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
} from "../../../Redux/PageUsersReducer";


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        if (this.props.status === statuses.NOT_INITIALIZED) {
            this.props.setStatus(statuses.INPROGRESS);
            this.props.setFetching(true);
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setStatus(statuses.SUCCESS);
                this.props.setUsers(response.data.items);
                this.props.setFetching(false);
            })
    };

    render() {
        return <div>
            {this.props.isFetching === true ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   unFollow={this.props.setUnFollow}
                   setFollow={this.props.setFollow}
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

const UsersContainer = connect(mapStateToProps, {
    setUsers,
    setStatus,
    setFollow,
    setUnFollow,
    setCurrentPage,
    setTotalUsersCount,
    setFetching
})(UsersAPIContainer);
export default UsersContainer;