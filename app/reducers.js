/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import sessionReducer from 'blocks/session/reducer';
import { LOG_OUT } from 'blocks/session/constants';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
function reducers(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    form: formReducer,
    session: sessionReducer,
    ...injectedReducers,
  });

  return rootReducer;
}



/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  const appReducer = (state, action) => {
    if(action.type === LOG_OUT){
      state = {};
    }
    return reducers(asyncReducers)(state, action);
  }

  return appReducer;
}