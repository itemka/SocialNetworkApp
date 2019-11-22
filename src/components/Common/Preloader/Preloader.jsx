import React from 'react';
import css from './Preloader.module.css';
import PreloaderSVG from '../../../Files/Images/Preloader.svg';

const Preloader = () => {
    return (
        <div className={css.PreloaderContainer}>
            <img className={css.Preloader} src={PreloaderSVG} alt=""/>
        </div>
    )
};

export default Preloader;