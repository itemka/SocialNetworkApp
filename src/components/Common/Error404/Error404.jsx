import React from 'react';
import error404 from "../../../Files/Images/404errorPage.jpg";
import {NavLink} from "react-router-dom";
import css from './Error404.modules.css';

export const Error404 = () => {
    return (
        <div className={css.error404} style={{textAlign: `center`}}>
            <div><img src={error404} alt={`Error 404`}/></div>
            <NavLink to={`/profile`}>Home page</NavLink>
        </div>
    )
};