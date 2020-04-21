/*
 *
 *  actions
 *
 */

export default function actions(constants) {
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


  function loadRecordsCacheHit() {
    return {
      type: LOAD_RECORDS_VALID_CACHE,
    };
  }

  function loadRecord(id) {
    return {
      type: LOAD_RECORD,
      id,
    };
  }

  function loadRecordSuccess(record) {
    return {
      type: LOAD_RECORD_SUCCESS,
      record
    };
  }

  function loadRecordError(error) {
    return {
      type: LOAD_RECORD_ERROR,
      error,
    };
  }

  function loadRecords(invalidateCache) {
    return {
      type: LOAD_RECORDS,
      invalidateCache,
    };
  }

  function loadRecordsSuccess(records, recordsMetaData) {
    return {
      type: LOAD_RECORDS_SUCCESS,
      records,
      recordsMetaData,
    };
  }

  function loadRecordsError(error) {
    return {
      type: LOAD_RECORDS_ERROR,
      error,
    };
  }

  function createRecord(record, form) {
    return {
      type: CREATE_RECORD,
      record,
      form,
    };
  }

  function createRecordSuccess(record) {
    return {
      type: CREATE_RECORD_SUCCESS,
      record,
    };
  }

  function createRecordError(error) {
    return {
      type: CREATE_RECORD_ERROR,
      error,
    };
  }

  function updateRecord(record, form) {
    return {
      type: UPDATE_RECORD,
      record,
      form,
    };
  }

  function updateRecordSuccess(record) {
    return {
      type: UPDATE_RECORD_SUCCESS,
      record,
    };
  }

  function updateRecordError(error) {
    return {
      type: UPDATE_RECORD_ERROR,
      error,
    };
  }

  function deleteRecord(id, form) {
    return {
      type: DELETE_RECORD,
      id,
      form,
    };
  }

  function deleteRecordSuccess(id) {
    return {
      type: DELETE_RECORD_SUCCESS,
      id,
    };
  }

  function deleteRecordError(error) {
    return {
      type: DELETE_RECORD_ERROR,
      error,
    };
  }
  
  return {
    loadRecord,
    loadRecordSuccess,
    loadRecordError,
    loadRecords,
    loadRecordsSuccess,
    loadRecordsError,
    createRecord,
    createRecordSuccess,
    createRecordError,
    updateRecord,
    updateRecordSuccess,
    updateRecordError,
    deleteRecord,
    deleteRecordSuccess,
    deleteRecordError,
    loadRecordsCacheHit,
  };
}
