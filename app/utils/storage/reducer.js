/*
 *
 *   reducer
 *
 */

import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  error: false,
  lastUpdate: null
});

export default function reducer(constants, name) {
  const {
    LOAD_RECORD,
    LOAD_RECORD_SUCCESS,
    LOAD_RECORD_ERROR,
    LOAD_RECORDS,
    LOAD_RECORDS_SUCCESS,
    LOAD_RECORDS_ERROR,
    CREATE_RECORD,
    CREATE_RECORD_SUCCESS,
    CREATE_RECORD_ERROR,
    UPDATE_RECORD,
    UPDATE_RECORD_SUCCESS,
    UPDATE_RECORD_ERROR,
    DELETE_RECORD,
    DELETE_RECORD_SUCCESS,
    DELETE_RECORD_ERROR,
    LOAD_RECORDS_VALID_CACHE,
  } = constants;

  return function recordsReducer(state = initialState, { type, id, record, records, error }) {
    switch (type) {
      case LOAD_RECORDS_VALID_CACHE:
        return state
          .set('loading', false)
          .delete('error')
          .delete('updateError')
          .delete('success');
      case LOAD_RECORD:
        return state
          .set('loading', true)
          .delete('error')
          .delete('updateError')
          .delete('success');
      case LOAD_RECORD_SUCCESS:
        return state
          .updateIn(['records', state.get('records').findIndex((row) => row.get('id') === record.id)], (rows) => rows.merge(fromJS(Object.assign({}, record))))
          // TODO: This should not be here, it belongs in some sort of "globals" reducer. This is a temporary hack and should be fixed!!!
          .delete('error')
          .delete('updateError')
          .delete('success')
          .set('loading', false);
      case LOAD_RECORD_ERROR:
        return state
          .set('loading', false)
          .set('error', true)
          .delete('success');
      case LOAD_RECORDS:
        return state
          .set('loading', true)
          .delete('error')
          .delete('updateError')
          .delete('success');
      case LOAD_RECORDS_SUCCESS:
        return state
          .set('loading', false)
          .set('records', fromJS(records))
          .delete('error')
          .delete('updateError')
          .delete('success');
      case LOAD_RECORDS_ERROR:
        return state
          .set('loading', false)
          .set('error', true)
          .delete('success');
      case CREATE_RECORD:
        return state
          .set('loading', true)
          .delete('updateError')
          .delete('success');
      case CREATE_RECORD_SUCCESS:
        return state
          .set('loading', false)
          .update('records', fromJS([]), (rows) => rows.unshift(fromJS(record)))
          .delete('updateError')
          .delete('success');
      case CREATE_RECORD_ERROR:
        return state
          .set('loading', false)
          .set('updateError', error)
          .delete('success');
      case UPDATE_RECORD:
        return state
          .set('loading', true)
          .delete('updateError')
          .delete('success');
      case UPDATE_RECORD_SUCCESS:
        return state
          .set('loading', false)
          .set('success', true)
          .updateIn(['records', state.get('records').findIndex((row) => row.get('id') === record.id)], (rows) => rows.merge(fromJS(record)))
          .delete('updateError');
      case UPDATE_RECORD_ERROR:
        return state
          .set('loading', false)
          .set('updateError', error)
          .delete('success');
      case DELETE_RECORD:
        return state
          .set('loading', true)
          .delete('updateError')
          .delete('success');
      case DELETE_RECORD_SUCCESS:
        return state
          .set('loading', false)
          .update('records', (rows) => (rows ? rows.filterNot((row) => row.get('id') === id) : rows))
          .delete('updateError')
          .delete('success');
      case DELETE_RECORD_ERROR:
        return state
          .set('loading', false)
          .set('updateError', error)
          .delete('success');
      default:
        return state;
    }
  };
}
