const SET_USERS = 'SN/USERS/SET_USERS';
const SET_STATUS = 'SN/USERS/SET_STATUS';

export const setUsers = users => ({type: SET_USERS, users: users});
export const setStatus = status => ({type: SET_STATUS, status: status});

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
                status: action.status
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        default: {
            return state;
        }
    }
};

export default PageUsersReducer;