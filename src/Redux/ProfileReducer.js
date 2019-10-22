import {profileAPI} from "../API/API";


const CHANGE_POST = 'SN/PROFILE/CHANGE_POST';
const ADD_POST = 'SN/PROFILE/ADD_POST';
const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE';
const STATUS = 'SN/PROFILE/STATUS';

export const onChangePostActionCreator = textNewPost => ({type: CHANGE_POST, newPost: textNewPost,});
export const onClickAddPostActionCreator = message => ({type: ADD_POST, message});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = statusText => ({type: STATUS, statusText: statusText});

export const GetUserProfileThunkCreator = userId => dispatch => {
    profileAPI.getUserProfileAPI(userId).then(data => dispatch(setUserProfile(data)));
};
export const SetStatusProfilePageThunkCreator = (userId) => dispatch => {
    profileAPI.setStatus(userId).then(data => dispatch(setStatus(data)));
};
export const UpdateStatusProfilePageThunkCreator = (statusText) => dispatch => {
    profileAPI.updateStatus(statusText).then(data => {
        if (data.resultCode === 0) dispatch(setStatus(statusText));
    })
};

let initialState = {
    profiles: [],
    // newPost: '',
    typing: '',
    posts: [
        {id: 2, text: 'It is new Application!', like: '2',},
        {id: 1, text: 'hi', like: '1',},
    ],
    profile: null,
    status: null,
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
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