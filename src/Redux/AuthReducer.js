import {authAPI, profileAPI} from "../API/API";


const SET_USER_DATA = 'SN/HEADER/SET_USER_DATA';
const SET_USER_PHOTO = 'SN/HEADER/SET_USER_PHOTO';

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setUserPhoto = userPhoto => ({type: SET_USER_PHOTO, userPhoto: userPhoto});

export const checkUserDataThunkCreator = (isAuth) => dispatch => {
    authAPI.setUserDataAPI().then(data => {
        if (data.resultCode === 0) { // if we have login (resultCode === 0) then we can make request to get setUserData
            let {id, email, login} = data.data;
            dispatch(setUserData(id, email, login));
            if (isAuth) {
                profileAPI.getProfilePhotoAPI(id).then(data => {
                    dispatch(setUserPhoto(data.photos.small));
                })
            }
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
                isAuth: true,
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