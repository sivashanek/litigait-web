/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, race, take } from 'redux-saga/effects';
import { LOG_IN } from './constants';
import { logIn } from './actions';





export default function* logInSaga() {
    while (true) { // eslint-disable-line no-constant-condition
      const load = yield race({
        explicitLoad: take(LOG_IN),
      });

      const { explicitLoad } = load;
      yield put(logIn());
    }
  }