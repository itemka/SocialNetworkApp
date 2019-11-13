import React from 'react';
import css from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import copyToClipboard from 'copy-to-clipboard';

const maxLength20 = maxLengthCreator(20);
const LoginForm = props => {
    if (props.isAuth) {
        return <form onSubmit={props.handleSubmit}>
            <button>Log out</button>
        </form>
    } else {
        return (
            <form onSubmit={props.handleSubmit}>
                {props.isAuth === true
                    ? <button>Log out</button>
                    : <div>
                        {createField(Input, [required, maxLength20], `Email`, `Email`, {className: css.input})}
                        {createField(Input, [required, maxLength20], `Password`, `Password`, {
                            type: `password`,
                            className: css.input
                        })}
                        {createField(`input`, null, `Remember`, null, {type: `checkbox`}, `Remember me`)}
                    </div>}
                {props.error && <div className={css.formError}>{props.error}</div>}
                <div>{props.isAuth ? <button>Log out</button> : <button className={css.button}>Log in</button>}</div>
            </form>
        )
    }
};
const mapStateToProps = state => {
    return {isAuth: state.authUserData.isAuth}
};
const ConnectorLoginForm = connect(mapStateToProps, {})(LoginForm);

const LoginReducerForm = reduxForm({form: `login`})(ConnectorLoginForm);

const Login = props => {
    const onSubmit = formData => {

        props.isAuth ? props.logOutThunkCreator() : props.logInThunkCreator(formData.Email, formData.Password, formData.Remember, props.isAuth);
    };
    if (props.isAuth) return <Redirect to={`/profile`}/>;
    return (
        <div className={css.Login}>
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
            <LoginReducerForm onSubmit={onSubmit}/>
        </div>
    )
};


export default Login;