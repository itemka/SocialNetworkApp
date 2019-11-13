import {userAPI} from "../API/API";
import {updateObjectInArray} from "../utils/shortFunctionToArray";


const SET_USERS = 'SN/USERS/SET_USERS';
const SET_STATUS = 'SN/USERS/SET_STATUS';
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FETCHING = 'SET_FETCHING';
const SET_CHECK_FOLLOW = 'SET_CHECK_FOLLOW';
export const statuses = {
    NOT_INITIALIZED: 'NOT_INITIALIZED', ERROR: 'ERROR', INPROGRESS: 'INPROGRESS',
    CAPTCHA_REQUIRED: 'CAPTCHA_REQUIRED', SUCCESS: 'SUCCESS'
};

export const setUsers = users => ({type: SET_USERS, users: users});
export const setStatus = status => ({type: SET_STATUS, status: status});
export const setFollow = userId => ({type: FOLLOW, userId: userId});
export const setUnFollow = userId => ({type: UNFOLLOW, userId: userId});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount});
export const setFetching = loading => ({type: SET_FETCHING, loading: loading});
export const setCheckFollow = (checked, userId) => ({type: SET_CHECK_FOLLOW, checked, userId});

export const GetUserThunkCreator = (currentPage, pageSize, status) => async dispatch => {
    if (status === statuses.NOT_INITIALIZED) {
        dispatch(setStatus(statuses.INPROGRESS));
        dispatch(setFetching(true));
        let responseData = await userAPI.getUsersAPI(currentPage, pageSize);
        dispatch(setStatus(statuses.SUCCESS));
        dispatch(setUsers(responseData.items));
        dispatch(setTotalUsersCount(responseData.totalCount));
        dispatch(setFetching(false));
    }
};
export const SetCurrentPageMethodThunkCreator = (currentPage, pageSize) => async dispatch => {
    dispatch(setFetching(true));
    dispatch(setCurrentPage(currentPage));
    let responseData = await userAPI.getUsersAPI(currentPage, pageSize);
    dispatch(setStatus(statuses.SUCCESS));
    dispatch(setUsers(responseData.items));
    dispatch(setFetching(false));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setCheckFollow(true, userId));
    let responseData = await apiMethod(userId);
    if (responseData.resultCode === 0) {// if we have login (resultCode === 0) then we can make request to setFollow
        dispatch(actionCreator(userId));
        dispatch(setCheckFollow(false, userId));
    }
};
export const SetFollowThunkCreator = userId => async dispatch => {
    followUnfollowFlow(dispatch, userId, userAPI.setFollowAPI.bind(userAPI), setFollow);
};
export const SetUnFollowThunkCreator = (userId) => async dispatch => {
    followUnfollowFlow(dispatch, userId, userAPI.setUnFollowAPI.bind(userAPI), setUnFollow);
};


let initialState = {
    status: statuses.NOT_INITIALIZED,
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,/*выборка*/
    checkFollow: []
};

const UsersReducer = (state = initialState, action) => {//debugger
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                users: state.users.map(user => ({...user})),
                status: action.status
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: true})
            }
        }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: false})
            };
        case SET_FETCHING:
            return {...state, isFetching: action.loading};
        case SET_CHECK_FOLLOW:
            return {
                ...state,
                checkFollow: action.checked
                    ? [...state.checkFollow, action.userId]
                    : state.checkFollow.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export default UsersReducer;