let initialState = {
    listPages: [
        {id: 1, page: 'My Page', path: 'profile',},
        {id: 2, page: 'Messages', path: 'messages',},
        {id: 3, page: 'News', path: 'news',},
        {id: 4, page: 'Music', path: 'music',},
        {id: 5, page: 'Settings', path: 'settings',},
    ],
};

const SiteBarLeftReducer = (state = initialState, action) => {
    switch (action.type) {
        default:{
            return state;
        }
    }
};

export default SiteBarLeftReducer;