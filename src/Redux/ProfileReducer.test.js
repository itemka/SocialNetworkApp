// 1. test data
// 2. do action
// 3. expectation

import profileReducer, {deletePost, onClickAddPostActionCreator} from "./ProfileReducer";

// 2. do action
let testsState = {
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
        {id: 1, text: 'It is new Application!', like: '2',},
        {id: 2, text: 'hi', like: '1',},
    ],
    profile: null,
    status: null,
};

it('length of post should be incremented', () => {
    // 1. test data
    let action = onClickAddPostActionCreator("I added this text.");
    let newState = profileReducer(testsState, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('text of new post should be correct', () => {
    let action = onClickAddPostActionCreator("I added this text.");
    let newState = profileReducer(testsState, action);
    expect(newState.posts[0].text).toBe("I added this text.");
});

// Test-driven development
it('length of posts should be decrement after deleting', () => {
    let action = deletePost(2);
    let newState = profileReducer(testsState, action);
    expect(newState.posts.length).toBe(1);
});
it('length of posts don`t should be decrement after deleting', () => {
    let action = deletePost(1000);
    let newState = profileReducer(testsState, action);
    expect(newState.posts.length).toBe(2);
});