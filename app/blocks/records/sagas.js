
/*
 *
 *  sagas
 *
 */

import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import { call, take, put, race, select, all } from 'redux-saga/effects';
import { startSubmit, stopSubmit } from 'redux-form/immutable';
import moment from 'moment';
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
    loadRecordsCacheHit 
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
        if (!invalidateCache && (lastLoad && (lastLoad - currentTimestamp) > VALID_CACHE_DIFF)) {
          yield put(loadRecordsCacheHit());
        } else {
          try {
            if(entityUrl === 'clients'){
            yield put(loadRecordsSuccess([{id:'1', name: 'test', email: 'a@g.com', phone: '783737', address: 'test', fee_acceptance_status: true,createdAt: moment()},{id:'2', name: 'test1', email: 'a1@g.com', phone: '22222', address: 'test1', hipaa_acceptance_status: true, fee_acceptance_status: true,createdAt: moment().subtract(1, 'month')}]));
            } else if(entityUrl === 'cases'){
              yield put(loadRecordsSuccess([
                {clientName:'test', id:'1', startDate: moment(), caseTitle: 'law', status: 'New'},
                {clientName:'test1', id:'2', startDate: moment().subtract(1, 'month'), caseTitle: 'law1', status: 'Active'}
              ]))
            }
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
          const result = yield call(createRecord, record);
          yield put(createRecordSuccess(record));
               
          yield put(stopSubmit(form));
          
          yield put(push(process.env.PUBLIC_PATH || `/${entityUrl}`));
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
          yield put(push(process.env.PUBLIC_PATH || `/${entityUrl}`));
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
          yield put(push(process.env.PUBLIC_PATH || `/${entityUrl}`));
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
