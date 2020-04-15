/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSession = state => state.session || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectSession,
    session => session.loading || false,
  );

const makeSelectError = () =>
  createSelector(
    selectSession,
    session => session.error || false,
  );

  const makeSelectLoggedIn = () =>
  createSelector(
    selectSession,
    session => session.loggedIn || false,
  );


export {
  selectSession,
  makeSelectLoading,
  makeSelectError,
  makeSelectLoggedIn
};
