/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.session;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState && globalState.loading || false,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState && globalState.error || false,
  );

  const makeSelectLoggedIn = () =>
  createSelector(
    selectGlobal,
    globalState => globalState && globalState.loggedIn || false,
  );


export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectLoggedIn
};
