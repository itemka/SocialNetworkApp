import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"},
});

export const api = {
    getUsersAPI: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    setFollowAPI: userId => instance.post(`follow/${userId}`, {},).then(response => response.data),
    setUnFollowAPI: userId => instance.delete(`follow/${userId}`).then(response => response.data),
    setUserDataAPI: () => instance.get(`auth/me`).then(response => response.data),
    getProfilePhotoAPI: id => instance.get(`profile/${id}`).then(response => response.data),
    getUserProfileAPI: (userId) => instance.get(`profile/${userId}`).then(response => response.data),
};