import { createSelector } from 'reselect';
import { List, Map } from 'immutable';


export default function selectors(name) {
  const selectDomain = () => (state) => state.name;
  
  const selectLoading = () => createSelector(
    selectDomain(),
    (domain) => domain && domain.loading || false,
  );

  const selectRecords = () => createSelector(
    selectDomain(),
    (domain) => domain && domain.records || [],
  );

  const selectRecord = (id) => createSelector(
    selectRecords(),
    (records) => {
      let record = records.find(r => r.id === id);
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
    selectRecord,
    selectError,
    selectUpdateError,
    selectUpdateTimestamp
  };
}
