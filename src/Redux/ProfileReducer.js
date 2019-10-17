import {profileAPI} from "../API/API";


const CHANGE_POST = 'SN/PROFILE/CHANGE_POST';
const ADD_POST = 'SN/PROFILE/ADD_POST';
const SET_USER_PROFILE = 'SN/PROFILE/SET_USER_PROFILE';
const STATUS = 'SN/PROFILE/STATUS';

export const onChangePostActionCreator = textNewPost => ({type: CHANGE_POST, newPost: textNewPost,});
export const onClickAddPostActionCreator = () => ({type: ADD_POST,});
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
            id: 2,
            name: 'man2',
            dataOfBirth: '2 March',
            education: 'BNTU2',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://www.beuwatches.com/wp-content/uploads/2019/06/1080x1080-solid6atm-lisa.jpg',
        },
        {
            id: 3,
            name: 'man3',
            dataOfBirth: '3 March',
            education: 'bntu',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://i.pinimg.com/originals/0b/a9/e4/0ba9e4af9f7ac7439a9ccece4ac14474.jpg',
        },
        {
            id: 4,
            name: 'man4',
            dataOfBirth: '4 March',
            education: 'BNTU4',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'http://sovetskaya-adygeya.ru/images/thumbnails/images/%D0%BF%D1%80%D0%B8%D1%8E%D1%82_%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8_%D1%82%D0%B5%D1%80%D0%B5%D0%B7%D1%8B-fill-1080x1080.jpg',
        },
        {
            id: 5,
            name: 'man5',
            dataOfBirth: '5 March',
            education: 'BNTU5',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://www.wmj.ru/imgs/2019/07/28/11/3470077/3ef02c93cb0cb839ecef5d1ddb1ab6a44a05ddef.jpg',
        },
        {
            id: 6,
            name: 'man6',
            dataOfBirth: '6 March',
            education: 'BNTU6',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://wallpaperaccess.com/full/652551.jpg',
        },
        {
            id: 7,
            name: 'man7',
            dataOfBirth: '7 March',
            education: 'BNTU7',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://www.jetmag.com/wp-content/uploads/2017/05/image.png',
        },
        {
            id: 8,
            name: 'man8',
            dataOfBirth: '8 March',
            education: 'BNTU8',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'http://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/2017/06/14/41093604187219511286829777008754791246575164719104n.jpg',
        },
        {
            id: 9,
            name: 'man9',
            dataOfBirth: '9 March',
            education: 'BNTU9',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://avatarfiles.alphacoders.com/115/thumb-115925.jpg',
        },
        {
            id: 10,
            name: 'man10',
            dataOfBirth: '10 March',
            education: 'BNTU10',
            city: 'Minsk',
            webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
            photoProfile: 'https://wallpapercave.com/wp/wp2966843.jpg',
        }
    ],
    newPost: '',
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
        case CHANGE_POST: {
            let stateCopy = {   //let stateCopy = cloneObject(state);
                ...state,
                profiles: state.profiles.map(item => ({...item})),
                newPost: action.newPost,
                typing: 'typing...',
                posts: state.posts.map(item => ({...item}))
            };
            console.log(stateCopy.newPost);
            return stateCopy;
        }
        case ADD_POST: {
            let stateCopy = { // let stateCopy = cloneObject(state);
                ...state,
                posts: state.posts.map(item => ({...item})),
            };

            if (stateCopy.newPost !== '') {
                let newPost = {
                    id: stateCopy.posts.length + 1,
                    text: stateCopy.newPost,
                    like: `${stateCopy.posts.length + 1}`
                };
                let newPosts = [newPost, ...stateCopy.posts];
                console.log(newPosts);
                stateCopy.posts = newPosts;
                stateCopy.newPost = '';
                stateCopy.typing = '';
            }
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile,}
        }
        default: {
            return state;
        }
    }
};

export default ProfileReducer;