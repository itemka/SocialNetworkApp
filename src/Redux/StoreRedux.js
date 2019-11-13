import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import DialogueReducer from "./DialogueReducer";
import ProfileReducer from "./ProfileReducer";
import SiteBarLeftReducer from "./SiteBarLeftReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";
import SiteBarRightReducer from "./SiteBarRightReducer";
import {reducer as formReducer} from "redux-form";
import AppReducer from "./AppReducer";

//Склеиваем все страницы в state
let combinedReducers = combineReducers({
    pageDialogue: DialogueReducer,
    pageProfile: ProfileReducer,
    siteBarLeft: SiteBarLeftReducer,
    pageUsers: UsersReducer,
    authUserData: AuthReducer,
    siteBarRight: SiteBarRightReducer,
    form: formReducer,
    app: AppReducer
});

//Создаем Store из склеянных страниц
let store = createStore(combinedReducers, applyMiddleware(thunk));
window.store = store;
export default store;