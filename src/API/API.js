import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"},
});

export const getUsersAPI = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
};
export const setFollowAPI = userId => {
    return instance.post(`follow/${userId}`, {},).then(response => response.data)
};
export const setUnFollowAPI = userId => {
    return instance.delete(`follow/${userId}`).then(response => response.data)
};
export const setUserDataAPI = () => {
    return instance.get(`auth/me`).then(response => response.data)
};
export const getProfilePhotoAPI = id => {
    return instance.get(`profile/${id}`).then(response => response.data)
};