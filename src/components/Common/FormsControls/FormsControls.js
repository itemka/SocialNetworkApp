import React from 'react';
import css from './FormsControls.module.css';
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

export const FormsControls = ({input, meta, ...props}) => {
    const haveError = meta.touched && meta.error;
    return (
        <div className={`${css.formControl} ${haveError && css.error}`}>
            {props.children}
            {haveError && <span>{meta.error}</span>}
        </div>
    )
};
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControls {...props}><textarea {...input} {...restProps}/></FormsControls>
};
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormsControls {...props}><input {...input} {...restProps}/></FormsControls>
};
export const createField = (component, validators, name, placeholder, props = {}, text = "") => (
    <span>
        <Field component={component} validate={validators} name={name}
               placeholder={placeholder} {...props}/>{text}
    </span>
);