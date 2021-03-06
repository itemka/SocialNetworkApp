import {userAPI} from "../API/API";

const SET_USERS = "SN/SITE_BAR_RIGHT/SET_USERS";
const SET_TOTAL_COUNT = "SN/SITE_BAR_RIGHT/SET_TOTAL_COUNT";
const SET_COUNT_USERS = "SN/SITE_BAR_RIGHT/SET_COUNT_USERS";

const setUsersAC = users => ({type: SET_USERS, users});
const setTotalUserCountAC = totalUsersCount => ({type: SET_TOTAL_COUNT, totalUsersCount});
const setCountUsersAC = countUsers => ({type: SET_COUNT_USERS, countUsers});

export const SetCountUsersThuncCreator = () => async dispatch => {
    let responseData = await userAPI.getTotalCountUsersAPI();
    dispatch(setTotalUserCountAC(responseData.totalCount));
    // dispatch(setCountUsersAC(data.totalCount));
};
export const SetUsersSiteBarRightThunkCreator = countUsers => async dispatch => {
    let responseData = await userAPI.getUsersAllAPI(countUsers);
    dispatch(setUsersAC(responseData.items));
};


const initialState = {
    users: [],
    totalUsersCount: 0,
    countUsers: 100,
};

const SiteBarRightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case SET_COUNT_USERS:
            return {
                ...state,
                countUsers: action.countUsers
            };
        default:
            return state;
    }
};

export default SiteBarRightReducer;