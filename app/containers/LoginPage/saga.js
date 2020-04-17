import { delay } from 'redux-saga';
import { call, take, put, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { startSubmit, stopSubmit } from 'redux-form/immutable';
import { DEFAULT_SESSION_TOKEN_ERROR } from 'utils/errors.js';

import {
  LOG_IN,
  LOG_OUT,
  VERIFY_SESSION
} from './constants';
import {
  verifySessionSuccess,
  verifySessionError,
  logInSuccess,
  logInError,
  logOutSuccess,
  logOutError,
} from './actions';

import store2 from 'store2';

const apiData = {
  "id": 1,
  "name": "Siva",
  "role": "admin",
  "secret": "11be01d560593a2176fd99ce1f01b9e06d1f955e7304b2e16a50eeea532051208cca4e195bbab3f29d7e85f1a664662c0aa94f9f8f8829e24aab00cf611cdd7db8e8cd7757fec84152bde7f190b8668efda5812c93cea1815bf51ef63ed89e56aaed35ad77d74c4536e77716b2ce3ce509bc266d643a1aac52c5bb2d526919b0",
  "version": "1.0"
};

export function* verifyInitialSessionSaga() {
  const secret = store2.get('secret');
  if (secret) {
    try {
      const user = apiData;
      store2.set('secret', secret);
      yield put(verifySessionSuccess(user));
    } catch (error) {
      store2.remove('secret');
      yield put(verifySessionError(DEFAULT_SESSION_TOKEN_ERROR));
      yield put(push(process.env.PUBLIC_PATH || '/'));
    }
  }
}

export function* verifySessionSaga() {
  while (true) { // eslint-disable-line no-constant-condition
    const { secret } = yield take(VERIFY_SESSION);
    if (secret) {
      try {
        const user = apiData;
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
  while (true) { // eslint-disable-line no-constant-condition
    const { identifier, secret, form } = yield take(LOG_IN);
    console.log('identifier', identifier);
    console.log('secret', secret);
    yield put(startSubmit(form));

    try {
      const result = apiData;
      store2.set('secret', result.secret);
      yield put(logInSuccess(result));
      yield put(push(process.env.PUBLIC_PATH || '/'));
    } catch (error) {
      store2.remove('secret');
      yield put(logInError(error));
    } finally {
      yield put(stopSubmit(form));
    }
  }
}

export function* logOutSaga() {
  while (true) { // eslint-disable-line no-constant-condition
    const watcher = yield take(LOG_OUT);

    if (watcher) {
      try {
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



export default function* rootSaga(){
  yield all([
    verifyInitialSessionSaga(),
    verifySessionSaga(),
    loginSaga(),
    logOutSaga()
  ])
}