import { createSelector } from 'reselect';
import { Map } from 'immutable';

const selectSession = () => (state) => {
  console.log('state',state);
  return state ? state.session : Map()
};

const selectLoggedIn = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.loggedIn || false,
);

const selectUser = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.user || {},
);

const selectError = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.error || {},
);

const selectSuccess = () => createSelector(
  selectSession(),
  (sessionState) => sessionState && sessionState.success || {},
);


export {
  selectSession,
  selectLoggedIn,
  selectUser,
  selectError,
  selectSuccess,
};
