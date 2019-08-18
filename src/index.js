import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/Store';

let renderAll = () => {

    ReactDOM.render(<App store={store} state={store.getState()}/>,
        document.getElementById('root'));
};
renderAll();

//Добавляем функцию в store
store.subscribe(() => {
    renderAll();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();