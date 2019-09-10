const SET_USERS = 'SN/USERS/SET_USERS';
const SET_STATUS = 'SN/USERS/SET_STATUS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

export const setUsers = users => ({type: SET_USERS, users: users});
export const setStatus = status => ({type: SET_STATUS, status: status});
export const setFollow = userId => ({type: FOLLOW, userId: userId});
export const unFollow = userId => ({type: UNFOLLOW, userId: userId});

export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED',
    ERROR: 'ERROR',
    INPROGRESS: 'INPROGRESS',
    CAPTCHA_REQUIRED: 'CAPTCHA_REQUIRED',
    SUCCESS: 'SUCCESS'
};

let initialState = {
    status: statuses.NOT_INITIALIZED,
    users: [],
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
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
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