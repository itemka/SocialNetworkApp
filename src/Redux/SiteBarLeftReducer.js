let initialState = {
    listPages: [
        {id: 1, page: 'My Page', path: 'profile',},
        {id: 2, page: 'Messages', path: 'messages',},
        {id: 3, page: 'News', path: 'news',},
        {id: 4, page: 'Music', path: 'music',},
        {id: 5, page: 'Settings', path: 'settings',},
        {id: 6, page: 'Users', path: 'users',},
    ],
};

const SiteBarLeftReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        listPage: state.listPages.map(item => ({...item})),
    };
    switch (action.type) {
        default: {
            return stateCopy;
        }
    }
};

export default SiteBarLeftReducer;