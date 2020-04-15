/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOG_IN } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false
};

/* eslint-disable default-case, no-param-reassign */
const sessionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOG_IN:
        draft.loggedIn = true;
        draft.error = false;
        draft.loading = false;
        break;
    }
  });

export default sessionReducer;
