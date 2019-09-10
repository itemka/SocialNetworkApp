import React from 'react';
import {statuses} from "../../../Redux/PageUsersReducer";
import css from './Users.module.css';
import axios from "axios";
import emptyFotoUser from './../../../Files/Images/user.png';

const Users = (props) => {
    if (props.status === statuses.NOT_INITIALIZED) {
        props.setStatus(statuses.INPROGRESS);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=30`).then(response => {
            props.setStatus(statuses.SUCCESS);
            props.setUsers(response.data.items);
        })
    }
    if (!props.users.length) {
        return <div>Users note found</div>
    }

    let users = props.users.map(user =>
        <div key={user.id} className={css.User}>
            {/*заглушка для фото `https://via.placeholder.com/150/`*/}
            <img src={user.photos.small === null ? emptyFotoUser : user.photos.small} alt=""/>

            <div className={css.UserInfo}>
                <div className={css.nameUser}>name: {user.name}</div>
                <div>id: {user.id}</div>
                <div>status: {user.status ? user.status : `no status :(`}</div>
                <div>followed: {user.followed ? `Yes!!!` : `No :(`}</div>
                {user.followed ?
                    <button className={css.buttonUserFollowed}
                            onClick={() => props.unFollow(user.id)}>unFollowed</button> :
                    <button className={css.buttonUserFollowed}
                            onClick={() => props.setFollow(user.id)}>setFollowed</button>
                }
            </div>
        </div>
    );
    return (
        <div>
            {users}
        </div>
    )
};

export default Users;