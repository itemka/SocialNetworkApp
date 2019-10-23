import React from 'react';
import css from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const maxLength20 = maxLengthCreator(20);
const LoginForm = props => {
    if (props.isAuth) {
        return <form onSubmit={props.handleSubmit}>
            <button>Log out</button>
        </form>
    } else {
        return (
            <form onSubmit={props.handleSubmit}>
                {props.isAuth === true ? <button>Log out</button> : <div>
                    <div>
                        <Field component={Input} validate={[required, maxLength20]} name={`Email`} placeholder={"Email"}
                               className={css.input}/>
                    </div>
                    <div>
                        <Field component={Input} validate={[required, maxLength20]} name={`Password`}
                               placeholder={"Password"} type={"password"} className={css.input}/>
                    </div>
                    <div>
                        <Field component={"input"} name={`Remember`} type={"checkbox"}/> Remember me
                    </div>
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
            <div>
                <h3>Login: itemka2503@gmail.com</h3>
                <h3>Password: Developer2503</h3>
            </div>
            <LoginReducerForm onSubmit={onSubmit}/>
        </div>
    )
};


export default Login;