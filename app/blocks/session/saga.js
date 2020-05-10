/*
 *
 *  session sagas
 *
 */

import { call, take, put, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { startSubmit, stopSubmit } from 'redux-form/immutable';
import { DEFAULT_SESSION_TOKEN_ERROR } from 'utils/errors.js';
import {setAuthToken} from 'utils/api';

import store2 from 'store2';
import { LOG_IN, LOG_OUT, VERIFY_SESSION, SIGN_UP } from './constants';
import {
  verifySessionSuccess,
  verifySessionError,
  logInSuccess,
  logInError,
  logOutSuccess,
  logOutError,
  signUpSuccess,
  signUpError,
  verifySession as verifySessionAction,
} from './actions';

import { logIn, logOut, verifySession, signUp} from './remotes';

export function* verifyInitialSessionSaga() {
  const secret = store2.get('secret');
  if (secret) {
    try {
      setAuthToken(secret);
      store2.set('secret', secret);
      const user = yield call(verifySession, secret);
      yield put(verifySessionSuccess(user));
    } catch (error) {
      store2.remove('secret');
      yield put(verifySessionError(DEFAULT_SESSION_TOKEN_ERROR));
      yield put(push(process.env.PUBLIC_PATH || '/'));
    }
  } else {
    try {
      yield call(logOut);
      yield put(logOutSuccess());
      yield put(push(process.env.PUBLIC_PATH || '/'));
    } catch (error) {
      yield put(logOutError(error));
    } finally {
      store2.remove('secret');
    }
  }
}

export function* verifySessionSaga() {
  while (true) {
    // eslint-disable-line no-constant-condition
    const { secret } = yield take(VERIFY_SESSION);
    if (secret) {
      try {
        const user = yield call(verifySession, secret);
        yield put(verifySessionSuccess(user));
      } catch (error) {
        store2.remove('secret');
        yield put(verifySessionError(DEFAULT_SESSION_TOKEN_ERROR));
        yield put(push(process.env.PUBLIC_PATH || '/'));
      }
    } else {
      store2.remove('secret');
      yield put(verifySessionError(DEFAULT_SESSION_TOKEN_ERROR));
      yield put(push(process.env.PUBLIC_PATH || '/'));
    }
  }
}

export function* loginSaga() {
  while (true) {
    // eslint-disable-line no-constant-condition
    const { identifier, secret, remember, form } = yield take(LOG_IN);
    yield put(startSubmit(form));
    
    try {
      const result = yield call(logIn, identifier, secret);
      if(remember){
        store2.set('secret', result.authToken);
      }
      setAuthToken(result.authToken);
      yield put(logInSuccess(result.user, result.authToken));
      yield put(push(process.env.PUBLIC_PATH || '/clients'));
    } catch (error) {
      store2.remove('secret');
      yield put(logInError(error));
    } finally {
      yield put(stopSubmit(form));
    }
  }
}

export function* logOutSaga() {
  while (true) {
    // eslint-disable-line no-constant-condition
    const watcher = yield take(LOG_OUT);

    if (watcher) {
      try {
        yield call(logOut);
        yield put(logOutSuccess());
        yield put(push(process.env.PUBLIC_PATH || '/'));
      } catch (error) {
        yield put(logOutError(error));
      } finally {
        store2.remove('secret');
      }
    }
  }
}

export function* signUpSaga() {
  while (true) {
    // eslint-disable-line no-constant-condition
    const { record, form } = yield take(SIGN_UP);
    yield put(startSubmit(form));
    
    try {
      const result = yield call(signUp, record);
      setAuthToken(result.authToken);
      yield put(signUpSuccess(result.user, result.authToken));
      yield put(push(process.env.PUBLIC_PATH || '/clients'));
    } catch (error) {
      store2.remove('secret');
      yield put(signUpError(error));
    } finally {
      yield put(stopSubmit(form));
    }
  }
}

export default function* rootSaga() {
  yield all([
    verifyInitialSessionSaga(),
    verifySessionSaga(),
    loginSaga(),
    logOutSaga(),
    signUpSaga(),
  ]);
}
