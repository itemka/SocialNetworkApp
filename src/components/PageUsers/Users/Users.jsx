import React from 'react';
import css from './Users.module.css';
import manWithBeard from './../../../Files/Images/manBeard.png';

let Users = (props) => {
    let pagesCounter = Math.ceil(props.totalUsersCount / props.pageSize);
    let arrayPagesCounter = [];
    for (let i = 1; i <= pagesCounter; i++) {
        arrayPagesCounter.push(i);
    }
    let users = props.users.map(user =>
        <div key={user.id} className={css.User}>
            {/*заглушка для фото `https://via.placeholder.com/150/`*/}
            <img src={user.photos.small === null ? manWithBeard : user.photos.small} alt=""/>

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
        <div className={css.BlockUsers}>
            {!props.users.length ? <div>Users note found</div> : null}

            {arrayPagesCounter.map(pageNumber =>
                <span className={`${css.buttons}`}>
                        <button onClick={() => props.setCurrentPageMethod(pageNumber)}
                                className={props.currentPage === pageNumber ? css.buttonUserFollowed : `${css.buttonNoActive}`}>
                            {pageNumber}
                        </button>
                </span>
            )}
            <br/><br/>

            {users}
        </div>
    )
};

export default Users;