import React from 'react';
import css from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength20 = maxLengthCreator(20);
const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required, maxLength20]} name={`Login`} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={Input} validate={[required, maxLength20]} name={`Password`} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={`Remember`} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
};

const LoginReducerForm = reduxForm({form: `login`})(LoginForm);

const Login = props => {
    const onSubmit = formData => {
        console.log(formData);
        // props.logInThunkCreator(formData.Login, formData.Password, formData.Remember);
    };
    return (
        <div>
            <h1 className={css.Login}>Login</h1>
            <LoginReducerForm onSubmit={onSubmit}/>
        </div>
    )
};

export default Login;