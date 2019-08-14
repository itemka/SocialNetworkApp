import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state,{dataFunctions} from './Redux/State';

let redrawEverything = (state) => {
    ReactDOM.render(<App state={state} dataFunctions={dataFunctions} />, document.getElementById('root'));
};
redrawEverything(state);

//Добавляем функцию в state
dataFunctions.renderAll(redrawEverything);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();