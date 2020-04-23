/*
 *
 *   reducer
 *
 */
import produce from 'immer';

const initialState = {
  loading: false,
  error: false,
  lastUpdate: null
};

export default function reducer(constants, name) {
  const {
    LOAD_RECORD,
    LOAD_RECORD_SUCCESS,
    LOAD_RECORD_ERROR,
    LOAD_RECORDS,
    LOAD_RECORDS_SUCCESS,
    LOAD_RECORDS_ERROR,
    CREATE_RECORD_SUCCESS,
    CREATE_RECORD_ERROR,
    UPDATE_RECORD_SUCCESS,
    UPDATE_RECORD_ERROR,
    DELETE_RECORD_SUCCESS,
    DELETE_RECORD_ERROR,
    LOAD_RECORDS_VALID_CACHE,
  } = constants;

  return function recordsReducer(state = initialState, { type, id, record, records, error }) {
    
    return produce(state, draft => {
      switch (type) {
        case LOAD_RECORDS_VALID_CACHE:
          draft.loading = false;
          draft.error = false;
          draft.updateError = false;
          draft.success = false;
          break;
        case LOAD_RECORDS:
        case LOAD_RECORD:
          draft.loading = true;
          draft.error = false;
          draft.updateError = false;
          draft.success = false;
          break;
        case LOAD_RECORDS_SUCCESS:
          draft.records = records;
          draft.lastUpdate = Math.floor(Date.now() / 1000);
          draft.loading = false;
          draft.error = false;
          draft.updateError = false;
          draft.success = false;
          break;
        case LOAD_RECORD_SUCCESS:
          draft.records.push(record);
          draft.loading = false;
          draft.error = false;
          draft.updateError = false;
          draft.success = false;
          break;
        case LOAD_RECORDS_ERROR:
        case LOAD_RECORD_ERROR:
          draft.loading = false;
          draft.error = true;
          draft.updateError = false;
          draft.success = false;
          break;
        case CREATE_RECORD_SUCCESS:
          draft.records.push(record);
          draft.loading = false;
          draft.error = false;
          draft.updateError = false;
          draft.success = false;
          break;
        case UPDATE_RECORD_SUCCESS:
          draft.records = draft.records.map((r ,i) => parseInt(record.id) === parseInt(i) ? Object.assign({}, record) : Object.assign({}, r));
          draft.loading = false;
          draft.error = false;
          draft.updateError = false;
          draft.success = false;
          break;
        case CREATE_RECORD_ERROR:
        case UPDATE_RECORD_ERROR:
        case DELETE_RECORD_ERROR:  
          draft.loading = false;
          draft.error = false;
          draft.updateError = error;
          draft.success = false;
          break;
        case DELETE_RECORD_SUCCESS:  
          draft.records = draft.records.filter((r, i) => parseInt(i) !== parseInt(id));
          draft.loading = false;
          draft.error = false;
          draft.updateError = false;
          draft.success = false;
          break;

      }
    });

  };
}
