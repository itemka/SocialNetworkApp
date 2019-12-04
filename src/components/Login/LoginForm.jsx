import React from 'react';
import css from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {getAuthUserIsAuthS, getCaptchaUrl} from "../../Redux/AuthSelectors";

const maxLength20 = maxLengthCreator(20);
const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.isAuth === true
                ? <button>Log out</button>
                : <div>
                    {createField(Input, [required, maxLength20], `email`, `Email`, {className: css.input})}
                    {createField(Input, [required, maxLength20], `password`, `Password`, {
                        type: `password`,
                        className: css.input
                    })}
                    {createField(`input`, null, `remember`, null, {type: `checkbox`}, `Remember me`)}
                </div>}
            {props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>}
            {props.captchaUrl && createField(Input, [required, maxLength20], `captcha`, `Symbols from image:`, {className: css.input})}
            {props.error && <div className={css.formError}>{props.error}</div>}
            <div>{props.isAuth ? <button>Log out</button> : <button className={css.button}>Log in</button>}</div>
        </form>
    )
};

const mapStateToProps = state => ({isAuth: getAuthUserIsAuthS(state), captchaUrl: getCaptchaUrl(state)});
export const LoginReducerForm = reduxForm({form: `login`})(connect(mapStateToProps, {})(LoginForm));