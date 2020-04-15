import { createSelector } from 'reselect';
import { List, Map } from 'immutable';


export default function selectors(name) {
  const selectDomain = () => (state) => state.get(name);
  
  const selectLoading = () => createSelector(
    selectDomain(),
    (domain) => domain ? domain.get('loading') : false,
  );

  const selectRecords = () => createSelector(
    selectDomain(),
    (domain) => domain ? domain.get('loading') : List(),
  );

  const selectRecord = (id) => createSelector(
    selectRecords(),
    (records) => {
      let record =
        records.find((record_) =>
          record_.get('id') === id) ||
        records.reduce((r, v) =>
          ((v.get('children') || List()).find((child) => child.get('id') === id) || r), Map());

      return record;
    }
  );

  const selectError = () => createSelector(
    selectDomain(),
    (domain) => domain.get('error'),
  );

  const selectUpdateError = () => createSelector(
    selectDomain(),
    (domain) => domain.get('updateError'),
  );


  return {
    selectDomain,
    selectLoading,
    selectRecords,
    selectRecord,
    selectError,
    selectUpdateError,
  };
}
