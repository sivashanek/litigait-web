import actions from './actions';
import constants from './constants';
import reducer from './reducer';
import sagas from './sagas';
import selectors from './selectors';

export default function records(name) {
  const actualConstants = constants(name);
  const actualActions = actions(actualConstants);
  const actualReducer = reducer(actualConstants);
  const actualSelectors = selectors(name);
  let actualSagas = sagas(actualConstants, actualActions, actualSelectors, name);
  
  return {
    name,
    actions: actualActions,
    constants: actualConstants,
    reducer: actualReducer,
    sagas: actualSagas,
    selectors: actualSelectors,
  };
}

