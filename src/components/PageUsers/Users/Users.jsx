import React from 'react';
import css from './Users.module.css';
import manWithBeard from './../../../Files/Images/manBeard.png';
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCounter = Math.ceil(props.totalUsersCount / props.pageSize);
    let arrayPagesCounter = [];
    for (let i = 1; i <= pagesCounter; i++) {
        arrayPagesCounter.push(i);
    }
    let users = props.users.map(user =>
        <div key={user.id} className={css.User}>

            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small === null ? manWithBeard : user.photos.small} alt=""/>
            </NavLink>

            <div className={css.UserInfo}>
                <div className={css.nameUser}>name: {user.name}</div>
                <div>id: {user.id}</div>
                <div>status: {user.status ? user.status : `no status :(`}</div>
                <div>followed: {user.followed ? `Yes!!!` : `No :(`}</div>
                {user.followed ?
                    <button className={css.buttonUserFollowed} onClick={() => props.setUnFollow(user.id)}>unFollowed</button> :
                    <button className={css.buttonUserFollowed} onClick={() => props.setFollow(user.id)}>setFollowed</button>
                }
            </div>

        </div>
    );
    return (
        <div className={css.BlockUsers}>
            {!props.users.length ? <div>Users note found</div> : null}
            <div className={css.center}>
                {arrayPagesCounter.map(pageNumber => {
                        if (((pageNumber >= props.currentPage - 1) && (pageNumber <= props.currentPage + 1)) || (pageNumber === props.currentPage)) {
                            return (
                                <span className={`${css.buttons}`}>
                                    <button onClick={() => props.setCurrentPageMethod(pageNumber)}
                                            className={props.currentPage === pageNumber ? css.buttonUserFollowed : `${css.buttonNoActive}`}>

                                        {pageNumber}
                                    </button>
                                </span>
                            )
                        }
                    }
                )}
            </div>
            <br/><br/>

            {users}
        </div>
    )
};

export default Users;