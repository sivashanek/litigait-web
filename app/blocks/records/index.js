import actions from './actions';
import constants from './constants';
import reducer from './reducer';
import sagas from './sagas';
import remotes from './remotes';
import selectors from './selectors';

export default function records(name, remotesBlock = []) {
  const actualConstants = constants(name);
  const actualActions = actions(actualConstants);
  const actualRemotes = remotes(name, remotesBlock);
  const actualReducer = reducer(actualConstants);
  const actualSelectors = selectors(name);
  let actualSagas = sagas(actualConstants, actualActions, actualRemotes, actualSelectors, name);
  
  return {
    name,
    actions: actualActions,
    constants: actualConstants,
    reducer: actualReducer,
    saga: actualSagas,
    selectors: actualSelectors,
  };
}

