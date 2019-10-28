export const getUsersS = (state) => {
    return state.pageUsers.users;
};
export const geUsersStatusS = (state) => {
    return state.pageUsers.status;
};
export const getUsersPageSizeS = (state) => {
    return state.pageUsers.pageSize;
};
export const getUsersTotalUsersCountS = (state) => {
    return state.pageUsers.totalUsersCount;
};
export const getUsersCurrentPageS = (state) => {
    return state.pageUsers.currentPage;
};
export const getUsersIsFetchingS = (state) => {
    return state.pageUsers.isFetching;
};
export const getUsersCheckFollowS = (state) => {
    return state.pageUsers.checkFollow;
};