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
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SESSION_RESET_ERROR
} from './constants';

const initialState = { error: {}, success: {}, secret: false, loading: true, version: '1.0' };


const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case VERIFY_SESSION_SUCCESS:
        draft.loggedIn = true;
        draft.loading = false;
        draft.user = action.user;
        draft.error = {};
        break;
      case LOG_IN_SUCCESS:
      case SIGN_UP_SUCCESS:
        draft.loggedIn = true;
        draft.loading = false;
        draft.user = action.user;
        draft.secret = action.token;
        draft.error = {};
        break;
      case VERIFY_SESSION_ERROR:  
      case LOG_IN_ERROR:
      case SIGN_UP_ERROR:
        draft.loggedIn = false;
        draft.user = false;
        draft.loading = false;
        draft.secret = false;
        draft.error = { login: action.error};
        break;
      case SESSION_RESET_ERROR:
        draft.error ={};
        break;
      case LOG_OUT_ERROR:
      case LOG_OUT_SUCCESS:
        draft.loggedIn = false;
        draft.user = false;
        draft.loading = false;
        draft.secret= false;
        draft.error = {};
    }
  });

export default appReducer;
