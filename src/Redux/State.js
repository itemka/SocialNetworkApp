const state = {
    pageProfile: {
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
                photoProfile: 'https://www.optix.su/blog/wp-content/uploads/2018/06/toni-stark-v-mstiteljah-jera-altrona.png',
            },
            {
                id: 3,
                name: 'man3',
                dataOfBirth: '3 March',
                education: 'BNTU3',
                city: 'Minsk',
                webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
                photoProfile: 'https://www.filmjuice.com/wp-content/uploads/2013/06/BlingRingWatson1a.jpg',
            },
            {
                id: 4,
                name: 'man4',
                dataOfBirth: '4 March',
                education: 'BNTU4',
                city: 'Minsk',
                webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
                photoProfile: 'http://i42-cdn.woman.ru/images/gallery/d/a/p_19547_da11d77fa795a547433d3a6805970f43_2_800x600.jpg?02',
            },
            {
                id: 5,
                name: 'man5',
                dataOfBirth: '5 March',
                education: 'BNTU5',
                city: 'Minsk',
                webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
                photoProfile: 'https://mediaassets.kxlf.com/cordillera-network/wp-content/uploads/sites/8/2019/07/31201827/Hoffman-Cluchey.jpeg',
            },
            {
                id: 6,
                name: 'man6',
                dataOfBirth: '6 March',
                education: 'BNTU6',
                city: 'Minsk',
                webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
                photoProfile: 'http://gazeta-smedvedkovo.ru/wp-content/uploads/2019/07/SMtreningRR.jpg',
            },
            {
                id: 7,
                name: 'man7',
                dataOfBirth: '7 March',
                education: 'BNTU7',
                city: 'Minsk',
                webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
                photoProfile: 'https://media.gettyimages.com/photos/beautiful-woman-with-makeup-picture-id872604744?s=612x612',
            },
            {
                id: 8,
                name: 'man8',
                dataOfBirth: '8 March',
                education: 'BNTU8',
                city: 'Minsk',
                webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
                photoProfile: 'https://www.essence.com/wp-content/uploads/2012/06/images/2012/06/21/happy-woman-2.jpg',
            },
            {
                id: 9,
                name: 'man9',
                dataOfBirth: '9 March',
                education: 'BNTU9',
                city: 'Minsk',
                webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
                photoProfile: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            },
            {
                id: 10,
                name: 'man10',
                dataOfBirth: '10 March',
                education: 'BNTU10',
                city: 'Minsk',
                webSite: 'https://www.facebook.com/profile.php?id=100004583561001&ref=bookmarks',
                photoProfile: 'https://media.gettyimages.com/photos/beautiful-woman-with-natural-makeup-picture-id897056188?s=612x612',
            }
        ],
        newPost: '',
        posts: [
            { id: 2, text: 'It is new Application!', like: '2', },
            { id: 1, text: 'hi', like: '1', },
        ],
    },
    pageDialogue: {
        messages: [
            {
                id: 1,
                message: 'Одна из особенностей React — это то, как он предлагает думать о приложениях в процессе их создания.',
            },
            {
                id: 2,
                message: 'poiuyghjk в процессе их создания.',
            },
            {
                id: 3,
                message: 'нностей React — это то, как он предлагает думать о приложениях в процессе их создания.',
            },
            {
                id: 4,
                message: 'Ghbdtn',
            },
        ],
    },
    siteBar: {
        siteBarLeft: {
            listPages: [
                {id: 1, page: 'My Page', path: 'profile',},
                {id: 2, page: 'Messages', path: 'messages',},
                {id: 3, page: 'News', path: 'news',},
                {id: 4, page: 'Music', path: 'music',},
                {id: 5, page: 'Settings', path: 'settings',},
            ],
        },
        siteBarRight: {}
    },
    functionToProcessingState: {

        renderSocialNetwork: () => '',
        renderAll: (item) => state.functionToProcessingState.renderSocialNetwork = item,

        onChangeAddPost: item => {
            state.pageProfile.newPost = item;
            console.log(state.pageProfile.newPost);
        },

        onClickButtonAddPost: () => {
            let newPost = {id: state.pageProfile.posts.length + 1, text: state.pageProfile.newPost, like: `${state.pageProfile.posts.length + 1}`};
            let newPosts = [newPost, ...state.pageProfile.posts];
            console.log(newPosts);
            state.pageProfile.posts = newPosts;
            state.functionToProcessingState.renderSocialNetwork(state);
        }

    },
};

export default state;