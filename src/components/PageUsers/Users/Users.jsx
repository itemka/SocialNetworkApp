import React from 'react';
import css from './Users.module.css';
import manWithBeard from './../../../Files/Images/manBeard.png';
import {NavLink} from "react-router-dom";
import Spinner42px from './../../../Files/Images/Spinner42px.svg';
import Preloader from "../../Common/Preloader/Preloader";


let Users = (props) => {
    let pagesCounter = Math.ceil(props.totalUsersCount / props.pageSize);
    let arrayPagesCounter = [];
    for (let i = 1; i <= pagesCounter; i++) {
        arrayPagesCounter.push(i);
    }
    let requestLoad = userId => props.checkFollow.some(id => id === userId) ? `${css.requestLoad}` : ``;

    let users = props.users.map(user =>
        <div key={user.id} className={css.User}>

            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small === null ? manWithBeard : user.photos.small} alt=""/>
            </NavLink>

            <div className={css.UserInfo}>
                <div className={css.nameUser}>{user.name}</div>
                <div>id: {user.id}</div>
                <div>status: {user.status ? user.status : `no status :(`}</div>
                <div
                    className={user.followed ? css.followOK : css.followNOTOK}>followed: {user.followed ? `Yes!!!` : `No :(`}</div>
                {user.followed
                    ? props.checkFollow.some(id => id === user.id)
                        ? <img src={Spinner42px} width="10px" alt=""/>
                        : <button disabled={props.checkFollow.some(id => id === user.id)}
                                  className={`${css.buttonUserFollowed} ` + requestLoad(user.id)}
                                  onClick={() => props.setUnFollow(user.id)}>unFollowed</button>
                    : props.checkFollow.some(id => id === user.id)
                        ? <img src={Spinner42px} width="10px" alt=""/>
                        : <button disabled={props.checkFollow.some(id => id === user.id)}
                                  className={`${css.buttonUserFollowed} ` + requestLoad(user.id)}
                                  onClick={() => props.setFollow(user.id)}>setFollowed</button>
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

            {props.isFetching === true ? <Preloader/> : null}

            {users}
        </div>
    )
};

export default Users;