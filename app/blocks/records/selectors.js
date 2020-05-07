/*
 *
 *  selectors
 *
 */

import { createSelector } from 'reselect';
import { List, Map } from 'immutable';
import mapRecords from './utils';
import mapRecordsMetaData from './metaData';

export default function selectors(name) {
  const selectDomain = () => (state) => state[name] || false;

  const selectLoading = () => createSelector(
    selectDomain(),
    (domain) => domain && domain.loading || false,
  );

  const selectRecordsMetaData = () => createSelector(
    selectDomain(),
    (domain) => domain && domain.recordsMetaData && mapRecordsMetaData(domain.recordsMetaData, name) || {},
  );

  const selectRecords = () => createSelector(
    selectDomain(),
    (domain) => domain && domain.records && mapRecords(domain.records, name) || [],
  );

  const selectRecord = (id) => createSelector(
    selectRecords(),
    (records) => {
      let record = records && records.find(r => r.id === id) || {};
      return record;
    }
  );

  const selectError = () => createSelector(
    selectDomain(),
    (domain) => domain && domain.error || false,
  );

  const selectUpdateError = () => createSelector(
    selectDomain(),
    (domain) => domain && domain.updateError || false,
  );

  const selectUpdateTimestamp = () => createSelector(
    selectDomain(),
    (domain) => domain && domain.lastUpdate || false,
  );


  return {
    selectDomain,
    selectLoading,
    selectRecords,
    selectRecordsMetaData,
    selectRecord,
    selectError,
    selectUpdateError,
    selectUpdateTimestamp
  };
}
