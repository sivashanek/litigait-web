/*
 *
 *  session selectors
 *
 */

import { createSelector } from 'reselect';
import { Map } from 'immutable';

export const selectSession = () => (state) => state ? state.session : Map();

export const selectRouter = () => (state) => state ? state.router : Map();

export const selectLoggedIn = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.loggedIn || false,
);

export const selectToken = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.secret || false,
);

export const selectLoading = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.loading || false,
);

export const selectUser = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.user || {},
);

export const selectError = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.error || {},
);

export const selectSuccess = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.success || {},
);

export const selectLocation = () => createSelector(
  selectRouter(),
  (routerState) => routerState && routerState.location || {},
);


export default {
  selectSession,
  selectLoading,
  selectToken,
  selectLoggedIn,
  selectUser,
  selectError,
  selectSuccess,
};
