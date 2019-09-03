const cloneObject = obj => {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = cloneObject(obj[i]);
        }
        return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (let item in obj) {
            if (obj.hasOwnProperty(item))
                copy[item] = cloneObject(obj[item]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
};

const CHANGE_POST = 'CHANGE_POST';
const ADD_POST = 'ADD_POST';

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
            education: 'BNTU3',
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
};

const PageProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_POST: {
            let stateCopy = {   //let stateCopy = cloneObject(state);
                ...state,
                profiles: state.profiles.map(item=> ({...item})),
                newPost: action.newPost,
                typing: 'typing...',
                posts: state.posts.map(item=>({...item}))
            };
            console.log(stateCopy.newPost);
            return stateCopy;
        }
        case ADD_POST: {
            let stateCopy = { // let stateCopy = cloneObject(state);
                ...state,
                posts: state.posts.map(item=>({...item})),
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
        default: {
            return state;
        }
    }
};

export const onChangePostActionCreator = textNewPost => ({
    type: CHANGE_POST,
    newPost: textNewPost,
});
export const onClickAddPostActionCreator = () => ({
    type: ADD_POST,
});

export default PageProfileReducer;