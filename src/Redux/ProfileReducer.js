import {profileAPI} from "../API/API";
import {stopSubmit} from "redux-form";

// const CHANGE_POST = 'SN/PROFILE/CHANGE_POST';
const ADD_POST = 'SN/PROFILE/ADD_POST';
const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE';
const STATUS = 'SN/PROFILE/STATUS';
const DELETE_POST = 'SN/PROFILE/DELETE_POST';
const SET_ERROR = 'SN/PROFILE/SET_ERROR';
const SET_OTHER_PEOPLE_ID = `SN/PROFILE/SET_OTHER_PEOPLE_ID`;
const SAVE_PHOTO_SUCCESS = `SN/PROFILE/SAVE_PHOTO_SUCCESS`;

// export const onChangePostActionCreator = textNewPost => ({type: CHANGE_POST, newPost: textNewPost,});
export const onClickAddPostActionCreator = message => ({type: ADD_POST, message});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = statusText => ({type: STATUS, statusText: statusText});
export const deletePost = postsId => ({type: DELETE_POST, postsId});
export const setError = error => ({type: SET_ERROR, error});
export const setOtherPeopleId = otherId => ({type: SET_OTHER_PEOPLE_ID, otherId});
export const savePhotoSuccess = photos => ({type: SAVE_PHOTO_SUCCESS, photos});

export const GetUserProfileThunkCreator = userId => async dispatch => {
    let responseData = await profileAPI.getUserProfileAPI(userId);
    dispatch(setUserProfile(responseData));
    dispatch(setOtherPeopleId(userId));
};
export const SetStatusProfilePageThunkCreator = (userId) => async dispatch => {
    let responseData = await profileAPI.setStatus(userId);
    dispatch(setStatus(responseData));
};
export const UpdateStatusProfilePageThunkCreator = (statusText) => async dispatch => {
    let responseData = await profileAPI.updateStatus(statusText);
    if (responseData.resultCode === 0) dispatch(setStatus(statusText));
};

export const SaveProfileThunkCreator = profile => async (dispatch, getState) => {
    try {
        let userId = getState().authUserData.userId;
        let responseData = await profileAPI.saveProfile(profile);

        if (responseData.resultCode === 0) {
            dispatch(GetUserProfileThunkCreator(userId));
            dispatch(setError(``));
        } else {
            // let contactsKey = responseData.messages[0].split(`->`)[1].split(`)`)[0].toLowerCase();
            dispatch(stopSubmit(`editProfile`, {_error: responseData.messages[0]}));
            dispatch(setError(responseData.messages[0]));
            return Promise.reject(responseData.messages[0])
        }
    } catch (err) {
        console.error(err)
    }
};
export const SavePhotoThunk = photo => async dispatch => {
    try {
        let responseData = await profileAPI.savePhoto(photo);
        if (responseData.resultCode === 0) dispatch(savePhotoSuccess(responseData.data.photos))
    } catch (err) {
        console.error(err)
    }
};

let initialState = {
    profiles: [
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
        {
            id: 1,
            name: 'Artem',
            dataOfBirth: '25 March',
            education: 'BNTU',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/67071798_1347581085404664_4338724534480797696_n.jpg?_nc_cat=104&_nc_oc=AQkLJZo7F7N4zFgH_evtuV3zhiWh_KxB-k9Ib239OP25fZyBICBKvdlzxWTM1S4WNDg&_nc_ht=scontent-frt3-1.xx&oh=099871eeb3564e3835a5ef8654af7f68&oe=5DEA59B7',
        },
    ],
    // newPost: '',
    typing: '',
    posts: [
        {id: 1, text: 'Hi! It is new Application!', like: '1',},
        {id: 2, text: 'It is new Application!', like: '2',},
    ],
    profile: null,
    status: null,
    error: ``,
    otherPeopleId: null,
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        case SET_OTHER_PEOPLE_ID:
            return {
                ...state,
                otherPeopleId: action.otherId
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(item => item.id !== action.postsId)],
            };
        case STATUS:
            return {
                ...state,
                status: action.statusText
            };
        case ADD_POST: {
            let stateCopy = { // let stateCopy = cloneObject(state);
                ...state,
                posts: state.posts.map(item => ({...item})),
            };

            if (action.message !== '') {
                let newPost = {
                    id: stateCopy.posts.length + 1, text: action.message,
                    like: `${stateCopy.posts.length + 1}`
                };
                let newPosts = [newPost, ...stateCopy.posts];
                // console.log(newPosts);
                stateCopy.posts = newPosts;
                // stateCopy.newPost = '';
                stateCopy.typing = '';
            }
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        // case CHANGE_POST: {
        //     let stateCopy = {   //let stateCopy = cloneObject(state);
        //         ...state,
        //         profiles: state.profiles.map(item => ({...item})),
        //         newPost: action.newPost,
        //         typing: 'typing...',
        //         posts: state.posts.map(item => ({...item}))
        //     };
        //     console.log(stateCopy.newPost);
        //     return stateCopy;
        // }
        default: {
            return state;
        }
    }
};

export default ProfileReducer;