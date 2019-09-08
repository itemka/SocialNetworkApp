import React from 'react';
import {statuses} from "../../Redux/PageUsersReducer";
import axios from "axios";

wi
const Users = (props) => {
    if (props.status === statuses.NOT_INITIALIZED) {
        props.setStatus(statuses.INPROGRESS);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=100`)
            .then(response => {
                props.setStatus(statuses.SUCCESS);
                props.setUsers(response.data.items);
            })
    }

    if (!props.users.length) {
        return <div>Users note found</div>
    }

    let users = props.users.map(user =>
        <>
            <img src={user.photos.small === null ? `https://via.placeholder.com/150` : user.photos.small} alt=""/>
            <div>{user.status ? user.status : `no status`}</div>
            <div>{user.name}</div>
        </>
    );
    return (
        <div>
            {users}
        </div>
    )
};

export default Users;