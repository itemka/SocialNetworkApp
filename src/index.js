import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import oldStore from './Redux/Store';

import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import DialogueReducer from "./Redux/DialogueReducer";
import ProfileReducer from "./Redux/ProfileReducer";
import SiteBarLeftReducer from "./Redux/SiteBarLeftReducer";
import {Provider} from "react-redux";
import UsersReducer from "./Redux/UsersReducer";
import AuthReducer from "./Redux/AuthReducer";

//Склеиваем все страницы в state
let combinedReducers = combineReducers({
    pageDialogue: DialogueReducer,
    pageProfile: ProfileReducer,
    siteBarLeft: SiteBarLeftReducer,
    pageUsers: UsersReducer,
    authUserData: AuthReducer
});
//Создаем Store из склеянных страниц
let store = createStore(combinedReducers);

//Добавляем subscribe(перерисовку всего) в oldStore. Было: // oldStore.subscribe(() => renderAll());
// store.subscribe(() => {
//     // console.log('state changed');
//     // renderAll(store.getState());
// });
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();