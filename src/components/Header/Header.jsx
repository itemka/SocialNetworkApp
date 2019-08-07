import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="logo"/>
        </div>
    );
};

export default Header;