import React from 'react';
import css from "./User.module.css";
import {NavLink} from "react-router-dom";
import manWithBeard from "../../../../Files/Images/manBeard.png";
import Preloader from "../../../Common/Preloader/Preloader";

export const User = props => {
    let requestLoad = userId => props.checkFollow.some(id => id === userId) ? `${css.requestLoad}` : ``;
    return (
        <div key={props.user.id} className={css.User}>
            <NavLink to={'/profile/' + props.user.id}>
                <img className={css.UserImg}
                     src={props.user.photos.small === null ? manWithBeard : props.user.photos.small} alt=""/>
            </NavLink>
            <div className={css.UserInfo}>
                <div className={css.nameUser}>{props.user.name}</div>
                <div>id: {props.user.id}</div>
                <div>status: {props.user.status ? props.user.status : `no status :(`}</div>
                <div
                    className={props.user.followed ? css.followOK : css.followNOTOK}>followed: {props.user.followed ? `Yes!!!` : `No :(`}</div>
                {props.user.followed
                    ? props.checkFollow.some(id => id === props.user.id)
                        ? <Preloader/>
                        : <button disabled={props.checkFollow.some(id => id === props.user.id)}
                                  className={`${css.buttonUserFollowed} ` + requestLoad(props.user.id)}
                                  onClick={() => props.SetUnFollowThunkCreator(props.user.id)}>unFollowed</button>
                    : props.checkFollow.some(id => id === props.user.id)
                        ? <Preloader/>
                        : <button disabled={props.checkFollow.some(id => id === props.user.id)}
                                  className={`${css.buttonUserFollowed} ` + requestLoad(props.user.id)}
                                  onClick={() => props.SetFollowThunkCreator(props.user.id)}>setFollowed</button>
                }
            </div>

        </div>
    )
};