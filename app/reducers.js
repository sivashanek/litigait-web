/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import sessionReducer from 'blocks/session/reducer';


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    form: formReducer,
    session: sessionReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
