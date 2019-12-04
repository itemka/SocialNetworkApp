import React from 'react';
import css from './Login.module.css';
import {Redirect} from "react-router-dom";
import copyToClipboard from 'copy-to-clipboard';
import {LoginReducerForm} from "./LoginForm";

export const Login = props => {
    return props.isAuth
        ? <Redirect to={`/profile`}/>
        : <div className={css.Login}>
            <h1>Login</h1>
            <div className={css.textAboutClipboard}>
                <div>If you will click on the red field</div>
                text will be copy to Clipboard
            </div>
            <div>
                <h3>Login:
                    <text onClick={() => copyToClipboard('test@gmail.com')}
                          className={css.LoginPassword}>test@gmail.com</text>
                </h3>
                <h3>Password:
                    <text onClick={() => copyToClipboard('test')} className={css.LoginPassword}>test</text>
                </h3>
            </div>
            <LoginReducerForm onSubmit={props.onSubmit}/>
        </div>
};