/*
 *
 * Session reducer
 *
 */

import produce from 'immer';

import {
  VERIFY_SESSION_SUCCESS,
  VERIFY_SESSION_ERROR,
  LOG_IN_SUCCESS,
  LOG_OUT_SUCCESS,
  LOG_IN_ERROR,
  LOG_OUT_ERROR,
} from './constants';

const initialState = { error: {}, success: {}, version: '1.0' };


const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case VERIFY_SESSION_SUCCESS:
      case LOG_IN_SUCCESS:
        draft.loggedIn = true;
        draft.user = action.user;
        draft.error = {};
        break;
      case VERIFY_SESSION_ERROR:  
      case LOG_IN_ERROR:
        draft.loggedIn = false;
        draft.user = false;
        draft.error = { login: action.error};
        break;
      case LOG_OUT_ERROR:
      case LOG_OUT_SUCCESS:
        draft.loggedIn = false;
        draft.user = false;
        draft.error = {};
    }
  });

export default appReducer;
