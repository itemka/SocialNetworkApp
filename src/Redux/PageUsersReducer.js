const SET_USERS = 'SN/USERS/SET_USERS';
const SET_STATUS = 'SN/USERS/SET_STATUS';
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export const setUsersActionCreator = users => ({type: SET_USERS, users: users});
export const setStatusActionCreator = status => ({type: SET_STATUS, status: status});
export const setFollowActionCreator = userId => ({type: FOLLOW, userId: userId});
export const unFollowActionCreator = userId => ({type: UNFOLLOW, userId: userId});
export const setCurrentPageActionCreator = currentPage => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCountActionCreator = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});
export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED', ERROR: 'ERROR', INPROGRESS: 'INPROGRESS', CAPTCHA_REQUIRED: 'CAPTCHA_REQUIRED', SUCCESS: 'SUCCESS'
};

let initialState = {
    status: statuses.NOT_INITIALIZED,
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1
};

const PageUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                users: state.users.map(user => ({...user})),
                status: action.status
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    } else {
                        return user;
                    }
                }),
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    } else {
                        return user;
                    }
                }),
            }
        }
        default: {
            return state;
        }
    }
};

export default PageUsersReducer;