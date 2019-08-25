import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import store from './Redux/Store';
import {combineReducers, createStore} from "redux";
import PageDialogueReducer from "./Redux/PageDialogueReducer/PageDialogueReducer";
import PageProfileReducer from "./Redux/PageProfileReducer/PageProfileReducer";
import SiteBarLeftReducer from "./Redux/SiteBarLeftReducer/SiteBarLeftReducer";

//Склеиваем все страницы в state
let combinedReducers = combineReducers({
    pageDialogue: PageDialogueReducer,
    pageProfile: PageProfileReducer,
    siteBarLeft: SiteBarLeftReducer,
});

//Создаем Store из склеянных страниц
let store = createStore(combinedReducers);

//Добавляем subscribe(перерисовку всего) в store. Было: // store.subscribe(() => renderAll());
store.subscribe(()=>{
    let state = store.getState();
    renderAll(state);
});

let renderAll = (state) => {
    ReactDOM.render(<App store={store} state={state}/>, document.getElementById('root'));
};

renderAll(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();