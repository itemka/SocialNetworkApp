export const getAuthUserIdS = (state) => {
    return state.authUserData.userId;
};
export const getAuthUserIsAuthS = (state) => {
    return state.authUserData.isAuth;
};
export const getAuthUserLoginS = (state) => {
    return state.authUserData.login;
};
export const getAuthUserUserPhotoS = (state) => {
    return state.authUserData.userPhoto;
};
export const getAuthUserIsOwner = (state) => {
    return state.authUserData.isOwner;
};