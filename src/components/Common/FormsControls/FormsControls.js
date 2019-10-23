import React from 'react';
import css from './FormsControls.module.css';

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