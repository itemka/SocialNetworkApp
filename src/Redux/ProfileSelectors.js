export const getProfileS = state => {
    return state.pageProfile.profile;
};
export const getProfilesS = (state) => {
    return state.pageProfile.profiles;
};
export const getProfileStatusS = (state) => {
    return state.pageProfile.status;
};
export const getProfilePostsS = (state) => {
    return state.pageProfile.posts;
};
export const getProfileNewPostS = (state) => {
    return state.pageProfile.newPost;
};
export const getProfileTypingS = (state) => {
    return state.pageProfile.typing;
};
export const getProfileError = state => {
    return state.pageProfile.error
};