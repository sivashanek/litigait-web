import api from 'utils/api';



export function verifySession() {
    return api.post(`/session`).then((response) => response.data).catch((error) => Promise.reject(error));
}

export function logIn(identifier, secret) {
    return api.post(`/login`, { identifier, secret }).then((response) => response.data).catch((error) => Promise.reject(error));
}

export function logOut() {
    return api.delete(`/session`).then((response) => response.data).catch((error) => Promise.reject(error));
}

export default [
    verifySession,
    logIn,
    logOut
];
