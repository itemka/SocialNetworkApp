import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
    let date = new Date();
    return (
        <div className={css.Footer}>
            {`ПАВЛЕНКО АРТЕМ ${date} ©2019`}
        </div>
    );
};

export default Footer;