import api from 'utils/api';

export function verifySession() {
  return api
    .get(`/users/me`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function logIn(email, password) {
  return api
    .post(`/login`, { email, password })
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export function logOut() {
  return api
    .delete(`/session`)
    .then(response => response.data)
    .catch(error => Promise.reject(error));
}

export default [verifySession, logIn, logOut];
