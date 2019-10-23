import {authAPI, profileAPI} from "../API/API";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SN/HEADER/SET_USER_DATA';
const SET_USER_PHOTO = 'SN/HEADER/SET_USER_PHOTO';

export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const setUserPhoto = userPhoto => ({type: SET_USER_PHOTO, userPhoto: userPhoto});

export const checkUserDataThunkCreator = (isAuth) => dispatch => {
    authAPI.setUserDataAPI().then(data => {
        if (data.resultCode === 0) { // if we have login (resultCode === 0) then we can make request to get setUserData
            let {id, email, login} = data.data;
            dispatch(setUserData(id, email, login, true));
            if (isAuth) {
                profileAPI.getProfilePhotoAPI(id).then(data => {
                    dispatch(setUserPhoto(data.photos.small));
                })
            }
        }
    })
};
export const logInThunkCreator = (email, password, rememberMe,isAuth) => dispatch => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(checkUserDataThunkCreator(isAuth));
        }
        else{
            dispatch(stopSubmit("login", {_error: data.messages, }))
        }
    })
};
export const logOutThunkCreator = () => dispatch => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    })
};

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    userPhoto: null,
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_USER_PHOTO:
            return {
                ...state,
                userPhoto: action.userPhoto,
            };
        default: {
            return state;
        }
    }
};
export default AuthReducer;