/*
 *
 * Session actions
 *
 */

import {
  VERIFY_SESSION,
  VERIFY_SESSION_SUCCESS,
  VERIFY_SESSION_ERROR,
  LOG_IN,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  LOG_OUT,
  LOG_OUT_SUCCESS,
  LOG_OUT_ERROR,
} from './constants';

export function verifySession(secret) {
  return {
    type: VERIFY_SESSION,
    secret
  };
}

export function verifySessionSuccess(user) {
  return {
    type: VERIFY_SESSION_SUCCESS,
    user,
  };
}

export function verifySessionError(error) {
  return {
    type: VERIFY_SESSION_ERROR,
    error,
  };
}

export function logIn(identifier, secret, form) {
  return {
    type: LOG_IN,
    identifier,
    secret,
    form,
  };
}

export function logInSuccess(user) {
  return {
    type: LOG_IN_SUCCESS,
    user,
  };
}

export function logInError(error) {
  return {
    type: LOG_IN_ERROR,
    error,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
  };
}

export function logOutSuccess() {
  return {
    type: LOG_OUT_SUCCESS,
  };
}

export function logOutError(error) {
  return {
    type: LOG_OUT_ERROR,
    error,
  };
}

