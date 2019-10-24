import React from 'react';
import css from './Header.module.css';
import {NavLink, Redirect} from 'react-router-dom';
// import manWithBeard from "../../Files/Images/manBeard.jpg";

const Header = (props) => {
    const LOGOUT = <NavLink onClick={props.logOutThunkCreator}>Log out</NavLink>;
    return (
        <div className={css.Header}>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo"/>
            <div className={css.textLogin}>
                {props.isAuth
                    ? <span> <NavLink to={`/profile/${props.userId}`}>{
                        /*`${props.userPhoto
                            ? `${props.userPhoto ? props.userPhoto : manWithBeard} ${props.login}`
                            : <img src={Preloader} alt=""/>}*/
                            `${props.login}`
                    }</NavLink><span>{LOGOUT}</span></span>
                    : /*<NavLink to={`/login`}>Login</NavLink>*/ null}
            </div>
        </div>
    );
};

export default Header;