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
  signUpError
} from './actions';

import { logIn, logOut, verifySession, signUp} from './remotes';

const dummyData = {
  authToken:
    'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmYWIxNDRjLWU3NjctNGFhYi04ODdhLTk3NDFmNGY4ZDNmOCIsInJvbGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNTg3NTIxMDUyLCJleHAiOjE1ODc2MDc0NTJ9.q5WBjgc79tL_QwFnIcOn7njESt1V-WFqx25K_-R2wI8',
  user: {
    name: 'Siva',
    role: 'superAdmin',
  },
};

export function* verifyInitialSessionSaga() {
  const secret = store2.get('secret');
  if (secret) {
    try {
      setAuthToken(secret);
      const user = yield call(verifySession, secret);
      store2.set('secret', secret);
      yield put(verifySessionSuccess(user));
      yield put(push(process.env.PUBLIC_PATH || '/clients'));
    } catch (error) {
      store2.remove('secret');
      yield put(verifySessionError(DEFAULT_SESSION_TOKEN_ERROR));
      yield put(push(process.env.PUBLIC_PATH || '/'));
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
        yield put(push(process.env.PUBLIC_PATH || '/clients'));
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
    console.log("remember == "+remember);
    try {
      const result = yield call(logIn, identifier, secret);
      // const result = dummyData;
      if(remember){
        store2.set('secret', result.authToken);
      }
      yield put(logInSuccess(result));
      setAuthToken(result.authToken);
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
      } catch (error) {
        yield put(logOutError(error));
      } finally {
        store2.remove('secret');
        yield put(push(process.env.PUBLIC_PATH || '/'));
      }
    }
  }
}

export function* signUpSaga() {
  while (true) {
    // eslint-disable-line no-constant-condition
    const { name, email, password, role, form } = yield take(SIGN_UP);
    yield put(startSubmit(form));
    console.log("identifier == "+name);
    console.log("secret == "+email);
    console.log("remember == "+password);
    console.log("role == "+role);
    try {
      const result = yield call(signUp, name, email, password, role);
      // const result = dummyData;
      // if(remember){
      //   store2.set('secret', result.authToken);
      // }
      yield put(signUpSuccess(result));
      setAuthToken(result.authToken);
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
