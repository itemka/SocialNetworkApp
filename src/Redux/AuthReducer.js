const SET_USER_DATA = 'SN/HEADER/SET_USER_DATA';
const SET_USER_FOTO = 'SN/HEADER/SET_USER_FOTO';

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setUserPhoto = userPhoto => ({type: SET_USER_FOTO, userPhoto: userPhoto});

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
        case SET_USER_FOTO:
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