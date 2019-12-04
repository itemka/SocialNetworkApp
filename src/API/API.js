import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": "326adc8b-48be-4905-a33d-14875af1c491"},
});

export const userAPI = {
    getUsersAPI: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    setFollowAPI: userId => instance.post(`follow/${userId}`, {},).then(response => response.data),
    setUnFollowAPI: userId => instance.delete(`follow/${userId}`).then(response => response.data),
    getTotalCountUsersAPI: () => instance.get(`users`).then(response => {
        // debugger
        return response.data
    }),
    getUsersAllAPI: (countUsers) => instance.get(`users?count=${countUsers}`).then(response => response.data),
};
export const authAPI = {
    setUserDataAPI: () => instance.get(`auth/me`).then(response => response.data),
    login: (email, password, rememberMe = false, captcha = null) => instance.post(`auth/login`,
        {
            email, password, rememberMe, captcha
        }).then(response => response.data),
    logout: () => instance.delete(`auth/login`).then(response => response.data)
};
export const profileAPI = {
    getProfilePhotoAPI: id => instance.get(`profile/${id}`).then(response => response.data),
    getUserProfileAPI: (userId) => instance.get(`profile/${userId}`).then(response => response.data),
    setStatus: (userId) => instance.get(`profile/status/${userId}`).then(response => response.data),
    updateStatus: (statusText) => instance.put(`profile/status`, {status: statusText}).then(response => response.data),
    saveProfile: (profile) => instance.put(`profile`, profile).then(response => response.data),
    savePhoto: (photoFile) => {
        const formData = new FormData();
        formData.append(``, photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
};

export const securityAPI = {
    getCaptcha: () => instance.get(`security/get-captcha-url`).then(response => response.data)
};