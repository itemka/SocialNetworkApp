import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MainApp} from "./App";
// import oldStore from './Redux/Store';

//Добавляем subscribe(перерисовку всего) в oldStore. Было: // oldStore.subscribe(() => renderAll());
// store.subscribe(() => {
//     // console.log('state changed');
//     // renderAll(store.getState());
// });

ReactDOM.render(<MainApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();