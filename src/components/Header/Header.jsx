import React from 'react';
import css from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';

const Header = (props) => {
    return (
        <div className={css.Header}>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo"/>
            <div className={css.textLogin}>
                {props.isAuth ?
                    <div>{`${props.userPhoto ? `${props.userPhoto} ${props.login}` : <img src={Preloader} alt=""/>} ${props.login}`}</div> :
                    <NavLink to={`/login`}>Login</NavLink>}
            </div>
        </div>
    );
};

export default Header;