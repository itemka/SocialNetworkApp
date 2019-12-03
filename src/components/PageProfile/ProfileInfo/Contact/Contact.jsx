import React from 'react';
import css from './Contact.module.css';

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={css.contact}><b>{contactTitle}</b>: <a href={contactValue}>{contactValue}</a></div>
};