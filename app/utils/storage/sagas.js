import { delay } from 'redux-saga';
import { call, take, put, race, select, all } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form/immutable';
const VALID_CACHE_DIFF = -30;

export default function sagas(constants, actions, remotes, selectors, entityUrl) {
  const {
    LOAD_RECORD,
    LOAD_RECORDS,
    CREATE_RECORD,
    UPDATE_RECORD,
    DELETE_RECORD
  } = constants;

  const {
    loadRecord: loadRecordAction,
    loadRecordSuccess,
    loadRecordError,
    loadRecords: loadRecordsAction,
    loadRecordsSuccess,
    loadRecordsError,
    createRecordSuccess,
    createRecordError,
    updateRecordSuccess,
    updateRecordError,
    deleteRecordSuccess,
    deleteRecordError,
  } = actions;

  const {
    loadRecord,
    loadRecords,
    createRecord,
    updateRecord,
    deleteRecord,
  } = remotes;

  const {
    selectRecords,
    selectUpdateTimestamp,
  } = selectors;


  

  function* loadRecordsSaga() {
    while (true) { // eslint-disable-line no-constant-condition
      const load = yield race({
        explicitLoad: take(LOAD_RECORDS),
      });

      const { explicitLoad } = load;
      const { invalidateCache } = explicitLoad || {};
      const lastLoad = yield select(selectUpdateTimestamp());
      const currentTimestamp = Math.floor(Date.now() / 1000);
      
      if (explicitLoad) {
        if (!invalidateCache && (lastLoad && (lastLoad - currentTimestamp) > VALID_CACHE_DIFF) && entityUrl != 'patients') {
          yield put(loadRecordsCacheHit());
        } else {
          try {
            const records = yield call(loadRecords);

            if (records) {
              yield put(loadRecordsSuccess(records));
            } else {
              yield put(loadRecordsError());
            }
          } catch (error) {
            yield put(loadRecordsError(error));
          }
        }
      }
    }
  }

  function* loadRecordSaga() {
    while (true) { // eslint-disable-line no-constant-condition
      const loadRequest = yield race({
        request: take(LOAD_RECORD),
      });
      const { request } = loadRequest;

      if (request) {
        const { id } = request;
        try {
          const record = yield call(loadRecord, id);
      
          if (record) {
            // Delays the dispatch of loadRecordSuccess untill the store is populated with an initial list of records.
            while (true) { // eslint-disable-line no-constant-condition
              const recordsInStore = yield select(selectRecords());
              if (recordsInStore && recordsInStore.size) {
                break;
              }
              yield call(delay, 500);
            }
            yield put(loadRecordSuccess(record));
          } else {
            yield put(loadRecordError());
          }
        } catch (error) {
          yield put(loadRecordError(error));
        }
      }
    }
  }

  function* createRecordSaga() {
    while (true) { // eslint-disable-line no-constant-condition
      const { create } = yield race({
        create: take(CREATE_RECORD),
      });
      const { record, form } = create || {};
      if (create) {
        yield put(startSubmit(form));

        try {
          yield call(createRecord, record);
          yield put(createRecordSuccess(record));
               
          yield put(stopSubmit(form));
        } catch (error) {
          yield put(createRecordError(error));
          yield put(stopSubmit(form, { _error: error }));
        }
      }
    }
  }

  function* editRecordSaga() {
    while (true) { // eslint-disable-line no-constant-condition
      const { edit } = yield race({
        edit: take(UPDATE_RECORD),
      });
      const { record, form } = edit || {};
      if (edit) {
        yield put(startSubmit(form));

        try {
          yield call(updateRecord, record);
          yield put(updateRecordSuccess(record));

        } catch (error) {
          yield put(updateRecordError(error));
          yield put(stopSubmit(form, { _error: error }));
        }
      }
    }
  }

  
  function* deleteRecordSaga() {
    while (true) { // eslint-disable-line no-constant-condition
      const { del } = yield race({
        del: take(DELETE_RECORD),
      });
      const { id, form } = del || {};
      if (del) {
        yield put(startSubmit(form));
        try {
          yield call(deleteRecord, id);
          yield put(deleteRecordSuccess(id));
          yield put(stopSubmit(form));
        } catch (error) {
          yield put(deleteRecordError(error));
          yield put(stopSubmit(form, { _error: error }));
        }
      }
    }
  }

  return function* rootSaga(){
    yield all([
      loadRecordSaga(),
      loadRecordsSaga(),
      createRecordSaga(),
      editRecordSaga(),
      deleteRecordSaga()
    ])
  }
 
}
